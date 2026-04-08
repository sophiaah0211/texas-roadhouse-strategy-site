"use client";

import { FileText, MessagesSquare, SearchCheck, Store } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { evidenceTabs } from "@/lib/site-data";

const icons = {
  experts: FileText,
  customers: MessagesSquare,
  reviews: SearchCheck,
  field: Store
};

export function EvidenceLab() {
  return (
    <Tabs defaultValue="experts">
      <TabsList className="w-full justify-start overflow-x-auto">
        {evidenceTabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {evidenceTabs.map((tab) => {
        const Icon = icons[tab.id as keyof typeof icons];

        return (
          <TabsContent key={tab.id} value={tab.id}>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="bg-[linear-gradient(180deg,rgba(255,248,240,0.92),rgba(247,239,229,0.82))] text-[var(--ink)]">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-4">
                    <div className="inline-flex rounded-full bg-[rgba(157,69,33,0.08)] p-3 text-[var(--accent-strong)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-[var(--ink-muted)]">
                        Validation stream
                      </p>
                      <h3 className="mt-2 font-display text-3xl">{tab.headline}</h3>
                    </div>
                    <p className="max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
                      This area is structured for evidence capture, synthesis, and citation-ready
                      excerpts so the final argument can move from opinion to proof.
                    </p>
                  </div>
                  <div className="hidden rounded-[1.75rem] border border-[rgba(56,45,39,0.08)] bg-white/70 p-4 shadow-[0_12px_30px_rgba(74,52,41,0.08)] md:block">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                      Planned scope
                    </p>
                    <div className="mt-3 space-y-2 text-sm text-[var(--ink)]">
                      <p>3-5 expert interviews</p>
                      <p>5-8 customer interviews</p>
                      <p>1,000+ online reviews</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4">
                {tab.cards.map((card) => (
                  <Card
                    key={card}
                    className="border-[rgba(255,255,255,0.12)] bg-[rgba(17,15,14,0.58)]"
                  >
                    <p className="text-sm leading-7 text-[var(--muted-foreground)]">{card}</p>
                  </Card>
                ))}
                <Card className="border-dashed border-[rgba(255,255,255,0.16)] bg-transparent">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                    Transcript placeholder
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                    “Insert coded quote block, timestamped excerpt, or field-note image here to
                    support the argument with direct evidence.”
                  </p>
                </Card>
              </div>
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
