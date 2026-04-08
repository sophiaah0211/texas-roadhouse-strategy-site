"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDownRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navSections } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteNavigation() {
  const [activeSection, setActiveSection] = useState(navSections[0]?.id ?? "hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers = navSections.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          rootMargin: "-30% 0px -55% 0px",
          threshold: 0.15
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const handleNavigate = () => setOpen(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <div className="flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(14,12,11,0.72)] px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <Link href="#hero" className="flex items-center gap-3" onClick={handleNavigate}>
            <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))]" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
                Strategic analysis
              </p>
              <p className="font-medium text-[var(--foreground)]">Texas Roadhouse</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navSections.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  activeSection === item.id
                    ? "bg-white/10 text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                document.getElementById("recommendation")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Recommendation
              <ArrowDownRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <button
            aria-label="Toggle navigation"
            className="rounded-full border border-white/10 p-2 text-[var(--foreground)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-4 top-24 z-40 rounded-[2rem] border border-white/10 bg-[rgba(16,14,12,0.96)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {navSections.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavigate}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm",
                  activeSection === item.id
                    ? "bg-white/10 text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
