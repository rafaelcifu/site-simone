import { numeros } from "@/content/home";
import { Section } from "@/components/atoms/section";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function Stats() {
  return (
    <Section padding="sm">
      <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {numeros.map((item) => (
          <StaggerItem key={item.label} className="flex flex-col gap-1">
            <span className="font-display text-4xl font-semibold md:text-5xl">
              {item.value}
            </span>
            <span className="text-sm text-muted-foreground">{item.label}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
