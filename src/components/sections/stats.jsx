import { Section } from "@/components/atoms/section";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function Stats({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <Section padding="sm" className="bg-background border-y border-border/40 py-10">
      <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {items.map((item) => (
          <StaggerItem
            key={item.label}
            className="flex flex-col items-center justify-center text-center"
          >
            <span className="font-display text-5xl font-extrabold tracking-tight text-brand-dark md:text-6xl">
              {item.value}
            </span>
            <span className="mt-2 text-sm font-semibold text-brand-red tracking-wide">
              {item.label}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
