"use client";

import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

type RevenueDatum = {
  year: string;
  revenue: number;
  comps: number;
  margins: number;
  stores: number;
};

type MarginBridgeDatum = {
  name: string;
  value: number;
};

type RadarDatum = {
  capability: string;
  TexasRoadhouse: number;
  PeerSet: number;
};

const chartStyle = {
  grid: "rgba(255,255,255,0.08)",
  text: "#b7aca2",
  accent: "#c96a38",
  accentSoft: "#f0c7a7",
  line: "#f8f2eb",
  negative: "#a1492c"
};

function ChartShell({
  heightClassName,
  children
}: {
  heightClassName: string;
  children: ReactNode;
}) {
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  return (
    <div className={`${heightClassName} min-w-0`}>
      {mounted ? (
        children
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
          <div className="space-y-3 text-center">
            <div className="mx-auto h-1.5 w-20 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
              <div className="h-full w-1/2 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-soft))]" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Preparing visual
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function RevenueStoryChart({ data }: { data: RevenueDatum[] }) {
  return (
    <ChartShell heightClassName="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={280}>
        <ComposedChart data={data}>
          <CartesianGrid stroke={chartStyle.grid} vertical={false} />
          <XAxis dataKey="year" stroke={chartStyle.text} tickLine={false} axisLine={false} />
          <YAxis yAxisId="left" stroke={chartStyle.text} tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke={chartStyle.text}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              background: "rgba(17,15,14,0.94)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px"
            }}
          />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="revenue"
            name="Revenue ($M)"
            fill={chartStyle.accent}
            radius={[12, 12, 4, 4]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="margins"
            name="Restaurant margin (%)"
            stroke={chartStyle.line}
            strokeWidth={2.5}
            dot={{ fill: chartStyle.line, strokeWidth: 0 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}

export function MarginBridgeChart({ data }: { data: MarginBridgeDatum[] }) {
  return (
    <ChartShell heightClassName="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={280}>
        <BarChart data={data}>
          <CartesianGrid stroke={chartStyle.grid} vertical={false} />
          <XAxis dataKey="name" stroke={chartStyle.text} tickLine={false} axisLine={false} />
          <YAxis stroke={chartStyle.text} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              background: "rgba(17,15,14,0.94)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px"
            }}
          />
          <Bar dataKey="value" radius={[10, 10, 4, 4]}>
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={entry.value >= 0 ? chartStyle.accentSoft : chartStyle.negative}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}

export function CapabilityRadarChart({ data }: { data: RadarDatum[] }) {
  return (
    <ChartShell heightClassName="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={280}>
        <RadarChart data={data}>
          <PolarAngleAxis dataKey="capability" tick={{ fill: chartStyle.text, fontSize: 12 }} />
          <Radar
            name="Texas Roadhouse"
            dataKey="TexasRoadhouse"
            stroke={chartStyle.accent}
            fill={chartStyle.accent}
            fillOpacity={0.35}
          />
          <Radar
            name="Peer set"
            dataKey="PeerSet"
            stroke={chartStyle.line}
            fill={chartStyle.line}
            fillOpacity={0.12}
          />
          <Legend />
          <Tooltip
            contentStyle={{
              background: "rgba(17,15,14,0.94)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px"
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}
