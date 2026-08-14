import { contact, site, social } from "@/content/site";
import {
  areaServed,
  credenciais,
  empresas,
  formacaoAcademica,
  knowsAbout,
  person,
} from "@/content/seo";
import { DEFAULT_LOCALE, getLocaleInfo } from "@/content/locales";
import { absoluteUrl, localeUrl } from "@/lib/seo";

/**
 * Builders de JSON-LD (schema.org).
 *
 * Por que isso importa:
 *   - Google usa para rich results e Knowledge Panel
 *   - LLMs (ChatGPT, Claude, Perplexity, Gemini) leem JSON-LD porque e
 *     estruturado e nao ambiguo — vale mais que o texto da pagina
 *
 * Estrategia de @id: cada entidade tem um @id estavel e unico. Assim o
 * grafo se conecta em vez de duplicar a mesma entidade em cada pagina.
 *
 *   {url}/#person        -> Simone Moura (pessoa)
 *   {url}/#business      -> a consultoria (entidade comercial)
 *   {url}/#website       -> o site
 *   {pageUrl}#webpage    -> cada pagina
 *
 * REGRA: schema so descreve o que EXISTE na pagina. Nao declare FAQ numa
 * pagina sem FAQ, nem review que nao esta visivel. Isso e violacao das
 * diretrizes do Google e derruba os rich results do site inteiro.
 */

const PERSON_ID = `${site.url}/#person`;
const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;

const sameAs = social.map((s) => s.href).filter(Boolean);

/** Endereco postal. Omite campos vazios — schema com string vazia e pior que ausente. */
function postalAddress() {
  const { street, city, state, zip, country } = contact.address;
  const address = {
    "@type": "PostalAddress",
    addressLocality: city,
    addressRegion: state,
    addressCountry: country,
  };
  if (street) address.streetAddress = street;
  if (zip) address.postalCode = zip;
  return address;
}

/** A pessoa. Entidade central do grafo. */
export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: person.name,
    url: site.url,
    jobTitle: person.jobTitle,
    description: person.description,
    image: absoluteUrl(person.image),
    address: postalAddress(),
    nationality: { "@type": "Country", name: "Brasil" },
    knowsAbout,
    knowsLanguage: ["pt-BR"],
    sameAs,
    alumniOf: formacaoAcademica.map((f) => ({
      "@type": "EducationalOrganization",
      name: f.name,
    })),
    hasCredential: credenciais.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: c.type,
      name: c.name,
    })),
    founder: empresas.map((e) => ({
      "@type": "Organization",
      name: e.name,
      description: e.description,
      foundingDate: e.foundingDate,
      ...(e.url ? { url: e.url } : {}),
    })),
    worksFor: { "@id": BUSINESS_ID },
  };
}

/**
 * A entidade comercial. ProfessionalService herda de LocalBusiness,
 * entao ativa SEO local (aparecer em "consultoria de branding em Fortaleza").
 */
export function businessSchema({ servicos = [] } = {}) {
  const schema = {
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: site.name,
    url: site.url,
    description: site.description,
    image: absoluteUrl(person.image),
    address: postalAddress(),
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    sameAs,
    priceRange: "$$$",
    areaServed: areaServed.map((a) => ({ "@type": a.type, name: a.name })),
    knowsAbout,
    slogan: site.tagline,
  };

  if (contact.email) schema.email = contact.email;
  if (contact.phone) schema.telephone = contact.phone;

  if (servicos.length) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: "Servicos",
      itemListElement: servicos.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.excerpt,
          url: absoluteUrl(`/servicos/${s.slug}`),
        },
      })),
    };
  }

  return schema;
}

/** O site em si. */
export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: site.locale,
    publisher: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  };
}

/**
 * Uma pagina. Amarra a pagina ao site e a pessoa.
 *
 * `locale` faz a URL e o @id seguirem o idioma: /sobre e /en/sobre sao duas
 * paginas, com dois @id. Sem isso as versoes traduzidas declaram a mesma
 * entidade com URLs diferentes e o grafo fica ambiguo.
 */
export function webPageSchema({
  path,
  title,
  description,
  type = "WebPage",
  locale = DEFAULT_LOCALE,
}) {
  const url = localeUrl(path, locale);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: getLocaleInfo(locale).locale,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    primaryImageOfPage: absoluteUrl(person.image),
  };
}

/**
 * Trilha de navegacao. O Google mostra no lugar da URL no resultado.
 *
 *   breadcrumbSchema([
 *     { name: "Servicos", path: "/servicos" },
 *     { name: servico.title, path: `/servicos/${servico.slug}` },
 *   ], locale)
 *
 * O item inicial (Inicio / Home) e adicionado automaticamente, ja no idioma
 * da pagina — nao inclua na lista.
 */
export function breadcrumbSchema(items = [], locale = DEFAULT_LOCALE) {
  const localeInfo = getLocaleInfo(locale);
  const all = [{ name: localeInfo.homeLabel, path: "/" }, ...items];

  return {
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: localeUrl(item.path, localeInfo.code),
    })),
  };
}

/** Um servico especifico. Use na pagina /servicos/[slug]. */
export function serviceSchema(servico, locale = DEFAULT_LOCALE) {
  const url = localeUrl(`/servicos/${servico.slug}`, locale);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: servico.title,
    description: servico.hero?.description || servico.excerpt,
    url,
    provider: { "@id": BUSINESS_ID },
    areaServed: areaServed.map((a) => ({ "@type": a.type, name: a.name })),
    serviceType: servico.title,
    ...(servico.highlights?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: servico.title,
            itemListElement: servico.highlights.map((h) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: h },
            })),
          },
        }
      : {}),
  };
}

/**
 * FAQ. So use se as perguntas estiverem VISIVEIS na pagina.
 * FAQ escondido e violacao das diretrizes do Google.
 */
export function faqSchema(items = []) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/**
 * Empacota varios schemas num unico @graph.
 * Um <script> por pagina, com todas as entidades conectadas por @id —
 * e assim que o Google prefere receber.
 */
export function graph(...schemas) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.flat().filter(Boolean),
  };
}
