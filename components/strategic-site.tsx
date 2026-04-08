"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowRight, ChevronRight, Download, Flame, LineChart, ShieldCheck, Sparkles } from "lucide-react";

import { CapabilityRadarChart, MarginBridgeChart, RevenueStoryChart } from "@/components/chart-panel";
import { EvidenceLab } from "@/components/evidence-lab";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionTracker } from "@/components/section-tracker";
import { SiteNavigation } from "@/components/site-navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  appendixLinks,
  businessModelPillars,
  capabilities,
  competitorTable,
  financialKpis,
  heroStats,
  implementationPhases,
  industryPressureMap,
  marginBridge,
  metadataStrip,
  operatingFlow,
  positioningData,
  radarData,
  recommendationChoices,
  revenueTrend,
  riskTable,
  roadmapItems,
  synthesisSignals,
  tensionCards,
  whyNowSignals,
  contextCards
} from "@/lib/site-data";

function Divider() {
  return (
    <div className="mx-auto my-8 h-px w-full max-w-6xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]" />
  );
}

export function StrategicSite() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <SiteNavigation />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-24 h-96 w-96 rounded-full bg-[rgba(157,69,33,0.16)] blur-3xl" />
        <div className="absolute right-[-8rem] top-[28rem] h-[28rem] w-[28rem] rounded-full bg-[rgba(214,176,147,0.12)] blur-3xl" />
        <div className="absolute left-1/3 top-[110rem] h-72 w-72 rounded-full bg-[rgba(120,41,26,0.12)] blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-[1600px] gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8 xl:px-10">
        <SectionTracker />

        <div className="min-w-0 flex-1 space-y-8">
          <section id="hero" className="relative isolate pt-10">
            <Reveal>
              <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(201,106,56,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:px-8 lg:px-10 lg:py-10">
                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="space-y-8">
                    <div className="flex flex-wrap gap-2">
                      {metadataStrip.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>

                    <div className="space-y-5">
                      <p className="text-xs uppercase tracking-[0.32em] text-[var(--muted-foreground)]">
                        Premium strategic analysis framework
                      </p>
                      <h1 className="max-w-4xl font-display text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
                        Texas Roadhouse built a rare traffic machine.
                        <span className="block text-[var(--accent-soft)]">
                          The harder question is how it scales without thinning the edge.
                        </span>
                      </h1>
                      <p className="max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
                        A presentation-ready strategic narrative designed to turn operating facts,
                        financial signals, and primary research into one coherent argument.
                      </p>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-[rgba(0,0,0,0.2)] p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Working thesis
                      </p>
                      <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                        Placeholder thesis: Texas Roadhouse’s next wave of value creation will
                        depend less on simply adding units and more on preserving the cultural and
                        operating mechanisms that make its value proposition feel unusually strong.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        onClick={() =>
                          document
                            .getElementById("strategic-tension")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        View the Argument
                        <ArrowDownRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() =>
                          document
                            .getElementById("financial-story")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        See the Evidence
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-4 self-end">
                    {heroStats.map((item, index) => (
                      <Reveal key={item.label} delay={index * 0.08}>
                        <Card className="bg-[rgba(8,8,8,0.28)]">
                          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                            {item.label}
                          </p>
                          <p className="mt-3 font-display text-4xl text-[var(--foreground)]">
                            {item.value}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                            {item.note}
                          </p>
                        </Card>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <section id="why-it-matters" className="scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="Why this company matters"
                title="Before the diagnosis, the business has to earn attention."
                description="This opening frame establishes why Texas Roadhouse matters strategically: not just because it is big, but because it appears to have built a differentiated operating system in a difficult category."
              />
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-5">
              {contextCards.map((card, index) => (
                <Reveal
                  key={card.title}
                  delay={index * 0.05}
                  className={index === 1 ? "lg:col-span-2" : index === 3 ? "lg:col-span-2" : ""}
                >
                  <Card className="h-full">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                      {card.title}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--foreground)]">{card.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>

          <Divider />

          <section id="business-model" className="scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="How the business works"
                title="The appeal is visible at the table. The advantage is built behind the scenes."
                description="This section translates the business model into an operating narrative: how value, throughput, local demand generation, and people practices interact to make the model work."
              />
            </Reveal>
            <div className="mt-10 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-5 md:grid-cols-2">
                {businessModelPillars.map((pillar, index) => (
                  <Reveal key={pillar.title} delay={index * 0.04}>
                    <Card className="h-full">
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        {pillar.title}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[var(--foreground)]">
                        {pillar.body}
                      </p>
                    </Card>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.15}>
                <Card className="h-full overflow-hidden">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                        Operating logic
                      </p>
                      <h3 className="mt-2 font-display text-3xl">From demand promise to growth flywheel</h3>
                    </div>
                    <Sparkles className="h-5 w-5 text-[var(--accent-soft)]" />
                  </div>
                  <div className="mt-8 space-y-4">
                    {operatingFlow.map((step, index) => (
                      <div key={step} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] text-sm">
                          {index + 1}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm leading-7 text-[var(--foreground)]">{step}</p>
                          {index < operatingFlow.length - 1 ? (
                            <div className="mt-3 ml-5 h-10 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent)]" />
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            </div>
          </section>

          <Divider />

          <section id="strategic-tension" className="scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="The strategic tension"
                title="The company’s strengths now create a more demanding kind of question."
                description="The case begins to tighten here. Texas Roadhouse still looks strong, but the strategic challenge is no longer whether the model works. It is whether the company can preserve what makes it work as the environment and the footprint become less forgiving."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="grid gap-5 md:grid-cols-2">
                {tensionCards.map((card, index) => (
                  <Reveal key={card.title} delay={index * 0.06}>
                    <Card className="h-full">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                        Tension
                      </p>
                      <h3 className="mt-3 font-display text-2xl">{card.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                        {card.body}
                      </p>
                    </Card>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.2}>
                <Card className="h-full bg-[linear-gradient(180deg,rgba(201,106,56,0.12),rgba(255,255,255,0.03))]">
                  <div className="flex items-center gap-3">
                    <Flame className="h-5 w-5 text-[var(--accent-soft)]" />
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                      Why now
                    </p>
                  </div>
                  <div className="mt-6 space-y-4">
                    {whyNowSignals.map((signal) => (
                      <div
                        key={signal}
                        className="rounded-[1.5rem] border border-white/10 bg-[rgba(0,0,0,0.1)] p-4"
                      >
                        <p className="text-sm leading-7 text-[var(--foreground)]">{signal}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            </div>
          </section>

          <Divider />

          <section id="landscape" className="scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="Competitive landscape"
                title="Pressure does not arrive as a framework. It arrives as trade-offs."
                description="The industry view is translated into practical language: who competes for the same occasions, where substitution pressure comes from, and which rivals attack Texas Roadhouse from different angles."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
              <Reveal>
                <Card className="h-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                        Industry pressure map
                      </p>
                      <h3 className="mt-2 font-display text-3xl">Where the category pushes back</h3>
                    </div>
                    <LineChart className="h-5 w-5 text-[var(--accent-soft)]" />
                  </div>
                  <div className="mt-8 space-y-5">
                    {industryPressureMap.map((item) => (
                      <div key={item.force}>
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <p className="text-sm text-[var(--foreground)]">{item.force}</p>
                          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                            {item.intensity}/100
                          </p>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-soft))]"
                            style={{ width: `${item.intensity}%` }}
                          />
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                          {item.signal}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>

              <div className="grid gap-5">
                <Reveal delay={0.08}>
                  <Card className="overflow-x-auto">
                    <div className="min-w-[42rem]">
                      <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr] gap-4 border-b border-white/10 pb-4 text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        <p>Competitor</p>
                        <p>Lane</p>
                        <p>Current advantage</p>
                        <p>Strategic watchout</p>
                      </div>
                      <div className="mt-4 space-y-4">
                        {competitorTable.map((row) => (
                          <div
                            key={row.competitor}
                            className="grid grid-cols-[1.1fr_1fr_1fr_1fr] gap-4 rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4"
                          >
                            <p className="text-sm text-[var(--foreground)]">{row.competitor}</p>
                            <p className="text-sm text-[var(--muted-foreground)]">{row.lane}</p>
                            <p className="text-sm text-[var(--muted-foreground)]">
                              {row.advantage}
                            </p>
                            <p className="text-sm text-[var(--muted-foreground)]">{row.risk}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Reveal>

                <Reveal delay={0.14}>
                  <Card className="overflow-hidden">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                          Positioning placeholder
                        </p>
                        <h3 className="mt-2 font-display text-3xl">Value versus experience map</h3>
                      </div>
                      <Badge>Editable benchmark inputs</Badge>
                    </div>
                    <div className="relative mt-8 h-[22rem] rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_58%)] p-6">
                      <div className="absolute inset-y-6 left-1/2 w-px bg-white/10" />
                      <div className="absolute inset-x-6 top-1/2 h-px bg-white/10" />
                      <div className="absolute left-6 top-4 text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Higher experience
                      </div>
                      <div className="absolute bottom-4 left-6 text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Lower experience
                      </div>
                      <div className="absolute bottom-6 right-6 text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Stronger value
                      </div>
                      <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Weaker value
                      </div>

                      {positioningData.map((point) => (
                        <div
                          key={point.name}
                          className="absolute"
                          style={{
                            left: `${point.value * 9}%`,
                            top: `${100 - point.experience * 9}%`
                          }}
                        >
                          <div className="rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(201,106,56,0.18)] px-3 py-2 text-xs text-[var(--foreground)] shadow-[0_12px_28px_rgba(0,0,0,0.24)]">
                            {point.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </Reveal>
              </div>
            </div>
          </section>

          <Divider />

          <section id="financial-story" className="scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="Financial story"
                title="By this point, the proof should feel harder to argue with."
                description="The visuals here are set up like a board deck: enough rigor to support a strategic case, but arranged to keep the narrative moving. All figures are easy to replace with final research outputs."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {financialKpis.map((kpi, index) => (
                <Reveal key={kpi.label} delay={index * 0.05}>
                  <Card className="h-full">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                      {kpi.label}
                    </p>
                    <p className="mt-3 font-display text-4xl">{kpi.value}</p>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                      {kpi.note}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
              <Reveal>
                <Card>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Growth and margin trajectory
                      </p>
                      <h3 className="mt-2 font-display text-3xl">Scale is visible. So is the balancing act.</h3>
                    </div>
                    <Badge>Replace with final model</Badge>
                  </div>
                  <RevenueStoryChart data={revenueTrend} />
                </Card>
              </Reveal>

              <Reveal delay={0.1}>
                <Card className="h-full">
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                      Margin bridge
                    </p>
                    <h3 className="mt-2 font-display text-3xl">What helps, what hurts</h3>
                  </div>
                  <MarginBridgeChart data={marginBridge} />
                </Card>
              </Reveal>
            </div>
          </section>

          <Divider />

          <section id="capabilities" className="scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="Internal capabilities"
                title="Some advantages are visible in the data. The better ones are buried in behavior."
                description="This section translates capability analysis into strategic language: which strengths feel durable, where they remain hard to imitate, and where cracks could begin to matter."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 xl:grid-cols-[1fr_1fr]">
              <div className="grid gap-5">
                {capabilities.map((capability, index) => (
                  <Reveal key={capability.title} delay={index * 0.04}>
                    <Card className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-2xl">
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                          {capability.title}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                          {capability.summary}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                          Fault line: {capability.faultLine}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-[rgba(255,255,255,0.05)] px-4 py-2">
                        <ShieldCheck className="h-4 w-4 text-[var(--accent-soft)]" />
                        <span className="text-sm text-[var(--foreground)]">{capability.score}/10</span>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.16}>
                <Card className="h-full">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Capability benchmark
                      </p>
                      <h3 className="mt-2 font-display text-3xl">Strengths and fault lines at a glance</h3>
                    </div>
                    <Badge>Radar placeholder</Badge>
                  </div>
                  <CapabilityRadarChart data={radarData} />
                </Card>
              </Reveal>
            </div>
          </section>

          <Divider />

          <section id="evidence-lab" className="scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="Validation and primary research"
                title="The site should look ready for fieldwork, not just desk research."
                description="This evidence lab is structured to make interviews, review mining, and field observations feel native to the analysis. It is designed to support citations, transcript excerpts, and triangulation."
              />
            </Reveal>
            <div className="mt-10">
              <Reveal>
                <EvidenceLab />
              </Reveal>
            </div>
          </section>

          <Divider />

          <section id="synthesis" className="scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="Insight synthesis"
                title="This is where the argument should click into place."
                description="The purpose of synthesis is not to repeat the evidence. It is to show how the signals reinforce one another and narrow the actual problem the company needs to solve."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-5">
              {synthesisSignals.map((signal, index) => (
                <Reveal
                  key={signal.title}
                  delay={index * 0.05}
                  className={index === 4 ? "lg:col-span-2" : ""}
                >
                  <Card className="h-full">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                      {signal.title}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--foreground)]">{signal.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <Card className="mt-5 border-[rgba(201,106,56,0.22)] bg-[linear-gradient(135deg,rgba(201,106,56,0.14),rgba(255,255,255,0.04))]">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                  Strategic problem statement
                </p>
                <h3 className="mt-3 max-w-4xl font-display text-4xl leading-tight">
                  Texas Roadhouse must decide how to preserve a culture-powered value advantage
                  while it grows into a larger, more complex system facing tighter consumer trade-offs
                  and less forgiving operating economics.
                </h3>
              </Card>
            </Reveal>
          </section>

          <Divider />

          <section id="recommendation" className="scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="The recommendation"
                title="Choose the path that scales the advantage, not just the footprint."
                description="This section is built as the climax of the story: the alternatives are visible, the selected choice is clear, and the implementation logic reads as a real executive recommendation rather than a classroom answer."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-5">
                {recommendationChoices.map((choice, index) => (
                  <Reveal key={choice.title} delay={index * 0.05}>
                    <Card
                      className={
                        choice.status === "Selected path"
                          ? "border-[rgba(201,106,56,0.3)] bg-[linear-gradient(135deg,rgba(201,106,56,0.16),rgba(255,255,255,0.04))]"
                          : ""
                      }
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                            {choice.status}
                          </p>
                          <h3 className="mt-2 font-display text-3xl">{choice.title}</h3>
                        </div>
                        {choice.status === "Selected path" ? <Badge>Recommended</Badge> : null}
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                        {choice.body}
                      </p>
                    </Card>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.16}>
                <Card className="h-full">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                    Rationale and expected upside
                  </p>
                  <div className="mt-4 space-y-5">
                    <p className="text-sm leading-7 text-[var(--foreground)]">
                      The selected recommendation keeps Texas Roadhouse anchored in the
                      differentiators that appear hardest to copy: culture, local demand generation,
                      and service-energy execution. It treats growth as an outcome of transferred
                      capability, not the strategy itself.
                    </p>
                    <div className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Upside hypothesis
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                        Protect traffic leadership, preserve price credibility, raise confidence in
                        new unit quality, and create a more defensible platform for multi-concept
                        expansion.
                      </p>
                    </div>
                    <div className="space-y-3">
                      {implementationPhases.map((phase) => (
                        <div
                          key={phase.phase}
                          className="rounded-[1.5rem] border border-white/10 bg-[rgba(0,0,0,0.1)] p-4"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                                {phase.phase}
                              </p>
                              <p className="mt-1 text-lg text-[var(--foreground)]">{phase.title}</p>
                            </div>
                            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                              {phase.timeline}
                            </p>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                            {phase.focus}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            </div>

            <Reveal delay={0.22}>
              <Card className="mt-5 overflow-x-auto">
                <div className="min-w-[44rem]">
                  <div className="grid grid-cols-[1fr_1.4fr] gap-4 border-b border-white/10 pb-4 text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                    <p>Risk</p>
                    <p>Mitigation</p>
                  </div>
                  <div className="mt-4 space-y-4">
                    {riskTable.map((row) => (
                      <div
                        key={row.risk}
                        className="grid grid-cols-[1fr_1.4fr] gap-4 rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4"
                      >
                        <p className="text-sm text-[var(--foreground)]">{row.risk}</p>
                        <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                          {row.mitigation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          </section>

          <Divider />

          <section id="roadmap" className="scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="Implementation roadmap"
                title="The recommendation needs an execution spine."
                description="This roadmap section is built to feel operationally credible: visible owners, dependencies, sequencing, and outcome metrics that can evolve with the final research."
              />
            </Reveal>

            <div className="mt-10 grid gap-5">
              {roadmapItems.map((item, index) => (
                <Reveal key={item.workstream} delay={index * 0.04}>
                  <Card className="grid gap-4 lg:grid-cols-[0.25fr_0.95fr_0.7fr_0.75fr_0.85fr]">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Timeline
                      </p>
                      <p className="mt-2 font-display text-2xl">{item.quarter}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Workstream
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--foreground)]">
                        {item.workstream}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Owner
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--foreground)]">{item.owner}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Success metric
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--foreground)]">{item.metric}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        Dependency
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                        {item.dependency}
                      </p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>

          <Divider />

          <section id="appendix" className="scroll-mt-28">
            <Reveal>
              <div className="overflow-hidden rounded-[2.5rem] border border-[rgba(60,49,41,0.1)] bg-[linear-gradient(180deg,rgba(255,248,240,0.96),rgba(244,235,224,0.88))] p-8 text-[var(--ink)] shadow-[0_24px_70px_rgba(0,0,0,0.14)] sm:p-10">
                <SectionHeading
                  eyebrow="Appendix / sources / method"
                  title="Built to hold evidence cleanly once the research is complete."
                  description="This closing area is formatted for source logging, transcript storage, method notes, and reference downloads so the finished site can hold both narrative polish and academic rigor."
                  theme="dark"
                  className="max-w-4xl"
                />

                <div className="mt-10 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
                  <div className="grid gap-4">
                    {appendixLinks.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-[1.75rem] border border-[rgba(64,51,44,0.08)] bg-white/70 px-5 py-4 shadow-[0_14px_30px_rgba(66,45,33,0.06)]"
                      >
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                            Reference placeholder
                          </p>
                          <p className="mt-2 text-sm text-[var(--ink)]">{item}</p>
                        </div>
                        <Download className="h-4 w-4 text-[var(--accent-strong)]" />
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.75rem] border border-[rgba(64,51,44,0.08)] bg-white/70 p-5 shadow-[0_14px_30px_rgba(66,45,33,0.06)]">
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                        Method note
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                        Final analysis will triangulate company filings, earnings commentary,
                        competitor disclosures, interview evidence, review mining, and store-level
                        observation. Citation formatting is intentionally ready for insertion.
                      </p>
                    </div>
                    <div className="rounded-[1.75rem] border border-[rgba(64,51,44,0.08)] bg-[rgba(157,69,33,0.06)] p-5 shadow-[0_14px_30px_rgba(66,45,33,0.06)]">
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                        Source anchors embedded in the site
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                        Founder W. Kent Taylor, the 1993 Clarksville opening, 816 restaurants as of
                        Dec. 30, 2025, the 714 company-operated / 102 franchised mix, the three
                        concepts, and the “Legendary Food, Legendary Service” mission are already
                        woven into the framework with room for footnotes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <footer className="mt-6 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                    Texas Roadhouse strategic analysis site
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">
                    A content-ready editorial shell for strategic depth, narrative flow, design
                    quality, and evidence readiness.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="#hero"
                    className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--foreground)]"
                  >
                    Back to top
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#appendix"
                    className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--foreground)]"
                  >
                    Sources
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </main>
    </div>
  );
}
