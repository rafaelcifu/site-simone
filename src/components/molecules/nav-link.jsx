"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

/**
 * Link de navegacao com estado ativo e underline animado no hover.
 * O underline usa scale-x + origin, entao anima sem reflow.
 */
export function NavLink({ href, children, className, onClick }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group relative py-1 text-sm font-medium transition-colors duration-200",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-current transition-transform duration-300 ease-out",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        )}
      />
    </Link>
  );
}
