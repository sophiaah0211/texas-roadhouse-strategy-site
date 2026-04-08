export type NavSection = {
  id: string;
  label: string;
  eyebrow: string;
};

export const navSections: NavSection[] = [
  { id: "hero", label: "Overview", eyebrow: "Opening frame" },
  { id: "why-it-matters", label: "Context", eyebrow: "Why TXRH matters" },
  { id: "business-model", label: "Model", eyebrow: "How the engine works" },
  { id: "strategic-tension", label: "Tension", eyebrow: "The issue emerging" },
  { id: "landscape", label: "Landscape", eyebrow: "Where pressure builds" },
  { id: "financial-story", label: "Evidence", eyebrow: "Numbers that matter" },
  { id: "capabilities", label: "Capabilities", eyebrow: "What is hard to copy" },
  { id: "evidence-lab", label: "Research", eyebrow: "Primary validation" },
  { id: "synthesis", label: "Synthesis", eyebrow: "What the signals mean" },
  { id: "recommendation", label: "Choice", eyebrow: "Where the case lands" },
  { id: "roadmap", label: "Roadmap", eyebrow: "Execution logic" },
  { id: "appendix", label: "Appendix", eyebrow: "Sources and method" }
];

export const metadataStrip = [
  "Strategic Management",
  "Texas Roadhouse, Inc.",
  "Premium analysis build",
  "Spring 2026"
];

export const heroStats = [
  { label: "Restaurants", value: "816", note: "As of Dec. 30, 2025" },
  { label: "Concept mix", value: "3", note: "Texas Roadhouse, Bubba's 33, Jaggers" },
  { label: "Ownership mix", value: "714 / 102", note: "Company-operated vs. franchised" }
];

export const contextCards = [
  {
    title: "Origin story",
    body: "Founded by W. Kent Taylor, the first restaurant opened in Clarksville, Indiana in 1993. The brand still feels founder-shaped: disciplined, energetic, and built around repeat visits rather than novelty."
  },
  {
    title: "Scale today",
    body: "Texas Roadhouse has become a national casual dining force with 816 restaurants across three concepts, giving the company enough size to matter while still relying on store-level execution."
  },
  {
    title: "Distinctive economics",
    body: "The model leans on everyday value, dinner-daypart strength, high table turns, and local store marketing instead of constant discounting or national ad theatrics."
  },
  {
    title: "Leadership and culture",
    body: "Management messaging centers on people first, operator autonomy, and the promise of 'Legendary Food, Legendary Service' as an operating system rather than a tagline."
  },
  {
    title: "Brand identity",
    body: "The brand occupies a rare space: approachable, energetic, and family-friendly, yet more experience-led than pure convenience-driven dining."
  }
];

export const businessModelPillars = [
  {
    title: "Value proposition",
    body: "Steakhouse quality cues at an everyday price point, supported by hospitality rituals customers remember."
  },
  {
    title: "Revenue engine",
    body: "High-volume dinner traffic, disciplined menu architecture, and steady check growth without overreliance on aggressive pricing."
  },
  {
    title: "Operating model",
    body: "Store-level accountability, consistent execution standards, and an experience calibrated for throughput without feeling rushed."
  },
  {
    title: "Growth model",
    body: "Measured unit expansion, adjacency through Bubba's 33 and Jaggers, and site selection that favors durable trade areas."
  },
  {
    title: "People-first culture",
    body: "Culture acts as infrastructure: staffing, service energy, and local ownership behavior all compound into guest loyalty."
  },
  {
    title: "Community strategy",
    body: "Local store marketing keeps the brand visible in-market and makes traffic acquisition feel earned rather than bought."
  }
];

export const operatingFlow = [
  "Everyday value and craveable menu anchor traffic",
  "Local marketing converts attention into repeat visits",
  "High-energy service reinforces the brand promise",
  "Volume supports operating leverage and new unit confidence"
];

export const tensionCards = [
  {
    title: "Value vs. margin",
    body: "The brand's price-value credibility is a competitive moat, but it narrows room to absorb labor and commodity pressure without consequence."
  },
  {
    title: "Growth vs. consistency",
    body: "Expansion creates runway, yet every new opening tests whether culture and execution can scale with the same intensity."
  },
  {
    title: "Traffic vs. pricing power",
    body: "Traffic resilience has been a strength; the harder question is how much pricing the brand can take before the equation changes."
  },
  {
    title: "Brand strength vs. rising substitution",
    body: "The experience remains differentiated, but consumers can increasingly trade across steakhouse, bar-and-grill, fast-casual, and takeout occasions."
  }
];

export const whyNowSignals = [
  "Inflation has changed what 'value' means, not whether it matters.",
  "Competitors are sharpening promotions and occasion capture.",
  "A larger store base raises the cost of inconsistency.",
  "Multi-concept growth turns capability questions into strategic questions."
];

export const industryPressureMap = [
  { force: "Premium casual steak competitors", intensity: 82, signal: "Compete on experience quality, wait tolerance, and perceived trade-up value." },
  { force: "Bar-and-grill chains", intensity: 71, signal: "Battle for group occasions and broad-menu convenience." },
  { force: "Fast-casual substitution", intensity: 63, signal: "Faster formats absorb value-seeking and convenience-driven visits." },
  { force: "QSR and delivery occasions", intensity: 56, signal: "Price-sensitive consumers increasingly split visits across lower-commitment meals." },
  { force: "Input cost volatility", intensity: 77, signal: "Protein, labor, and occupancy pressure squeeze the room for error." }
];

export const competitorTable = [
  {
    competitor: "Texas Roadhouse",
    lane: "Everyday steakhouse value",
    advantage: "Traffic engine and service energy",
    risk: "Margin sensitivity if value leadership must be defended harder"
  },
  {
    competitor: "LongHorn Steakhouse",
    lane: "Polished mainstream steakhouse",
    advantage: "Operational backing and broad familiarity",
    risk: "Less distinctive cultural identity"
  },
  {
    competitor: "Outback Steakhouse",
    lane: "Occasion-driven steakhouse",
    advantage: "Legacy brand awareness",
    risk: "Inconsistent brand momentum"
  },
  {
    competitor: "Chili's",
    lane: "Everyday social dining",
    advantage: "High-value promotions and menu breadth",
    risk: "Less specialized steak authority"
  },
  {
    competitor: "Applebee's",
    lane: "Mass-value neighborhood grill",
    advantage: "Promotional accessibility",
    risk: "Weaker premium perception"
  }
];

export const positioningData = [
  { name: "Texas Roadhouse", value: 8.5, experience: 8.2, scale: 8.1 },
  { name: "LongHorn", value: 7.4, experience: 7.9, scale: 7.6 },
  { name: "Outback", value: 6.8, experience: 7.1, scale: 7.3 },
  { name: "Chili's", value: 7.9, experience: 6.4, scale: 8.4 },
  { name: "Applebee's", value: 7.1, experience: 5.9, scale: 8.6 }
];

export const financialKpis = [
  { label: "Revenue growth", value: "+11.8%", note: "Placeholder trajectory for 3-year narrative" },
  { label: "Comparable sales", value: "+4.6%", note: "Shows continued traffic resilience" },
  { label: "Restaurant margin", value: "17.9%", note: "Illustrative boardroom placeholder" },
  { label: "New units", value: "31", note: "Signals reinvestment and growth confidence" }
];

export const revenueTrend = [
  { year: "2021", revenue: 3290, comps: 8.1, margins: 14.5, stores: 627 },
  { year: "2022", revenue: 4210, comps: 5.9, margins: 15.7, stores: 702 },
  { year: "2023", revenue: 4790, comps: 6.2, margins: 16.8, stores: 751 },
  { year: "2024", revenue: 5210, comps: 4.8, margins: 17.4, stores: 787 },
  { year: "2025", revenue: 5660, comps: 4.6, margins: 17.9, stores: 816 }
];

export const marginBridge = [
  { name: "Traffic leverage", value: 2.1 },
  { name: "Menu pricing", value: 1.3 },
  { name: "Labor pressure", value: -1.4 },
  { name: "Commodity pressure", value: -0.8 },
  { name: "Mix and efficiency", value: 0.9 }
];

export const capabilities = [
  {
    title: "Culture and people model",
    score: 9,
    summary: "A real source of differentiation when energy, retention, and accountability show up at the unit level.",
    faultLine: "Scaling culture is slower and harder than scaling footprints."
  },
  {
    title: "Operating discipline",
    score: 8,
    summary: "Execution is tight enough to convert volume into a system advantage.",
    faultLine: "Higher throughput magnifies any slippage in consistency."
  },
  {
    title: "Local marketing engine",
    score: 9,
    summary: "Community-based demand generation makes traffic feel durable rather than borrowed.",
    faultLine: "Hard to standardize perfectly across markets and leaders."
  },
  {
    title: "Real estate and site selection",
    score: 7,
    summary: "Measured expansion supports confidence in new unit economics.",
    faultLine: "The best sites get scarcer as the footprint grows."
  },
  {
    title: "Technology enablement",
    score: 6,
    summary: "Digital tools can support throughput, insights, and off-premise convenience without redefining the brand.",
    faultLine: "Over-digitization could erode experiential differentiation."
  },
  {
    title: "Multi-concept expansion",
    score: 7,
    summary: "Adjacency opens optionality and tests whether the organization can replicate its playbook beyond the core brand.",
    faultLine: "Concept sprawl can dilute management attention."
  }
];

export const radarData = [
  { capability: "Culture", TexasRoadhouse: 9, PeerSet: 6.5 },
  { capability: "Operations", TexasRoadhouse: 8, PeerSet: 6.8 },
  { capability: "Marketing", TexasRoadhouse: 9, PeerSet: 6.2 },
  { capability: "Real estate", TexasRoadhouse: 7, PeerSet: 7.1 },
  { capability: "Technology", TexasRoadhouse: 6, PeerSet: 7.0 },
  { capability: "Concept expansion", TexasRoadhouse: 7, PeerSet: 6.4 }
];

export const evidenceTabs = [
  {
    id: "experts",
    label: "Expert interviews",
    headline: "Industry operators, former executives, and category observers",
    cards: [
      "Interview queue designed for 3-5 expert conversations focused on unit economics, labor discipline, and competitive behavior.",
      "Transcript placeholder reserved for operator insights on value architecture and whether local marketing remains a durable edge.",
      "Takeaway slot for the moments when market opinion diverges from management narrative."
    ]
  },
  {
    id: "customers",
    label: "Customer interviews",
    headline: "Guests who can explain loyalty better than survey averages can",
    cards: [
      "Planned 5-8 customer interviews spanning repeat diners, lapsed guests, and trade-up/trade-down occasions.",
      "Observation prompts built around wait tolerance, value language, service expectations, and substitution behavior.",
      "Quote bank area for language that clarifies how the brand earns preference in practice."
    ]
  },
  {
    id: "reviews",
    label: "Review mining",
    headline: "Large-scale digital sentiment to validate patterns at scale",
    cards: [
      "Analysis placeholder for 1,000+ online reviews across multiple markets and concepts.",
      "Tagging framework prepped for food consistency, friendliness, speed, wait management, and occasion cues.",
      "Evidence box reserved for polarity shifts that point to execution risk before it shows up in reported numbers."
    ]
  },
  {
    id: "field",
    label: "Field observations",
    headline: "Store-level reality checks in context",
    cards: [
      "Site visit template captures parking lot flow, line management, service energy, and dining-room cadence.",
      "Photo and field-note spaces are structured to support comparison across dayparts and locations.",
      "Cross-check area links observations directly to the financial and strategic claims made elsewhere in the case."
    ]
  }
];

export const synthesisSignals = [
  {
    title: "Market signals",
    body: "Guests still respond to value, but value is now judged relative to convenience, consistency, and emotional payoff."
  },
  {
    title: "Financial signals",
    body: "Growth remains visible, yet the margin story increasingly depends on maintaining a delicate balance between price credibility and cost recovery."
  },
  {
    title: "Operating realities",
    body: "Execution strength is real, but scale turns every local deviation into a system-level question faster than before."
  },
  {
    title: "Customer perception",
    body: "The brand wins when guests feel they are getting more experience than they paid for, not just more calories."
  },
  {
    title: "Internal capabilities",
    body: "Texas Roadhouse owns capabilities competitors struggle to copy, but those strengths must now be extended without being diluted."
  }
];

export const recommendationChoices = [
  {
    title: "Defend value through restraint",
    status: "Option considered",
    body: "Preserve traffic leadership by keeping pricing cautious and treating margin as the secondary outcome."
  },
  {
    title: "Scale the core advantage deliberately",
    status: "Selected path",
    body: "Reinvest in culture, throughput, and local demand generation while tightening capability transfer across new units and concepts."
  },
  {
    title: "Push convenience-led expansion harder",
    status: "Option rejected",
    body: "Accelerate digital and off-premise growth as the main lever, even if it blurs the experiential advantage."
  }
];

export const implementationPhases = [
  {
    phase: "Phase 1",
    title: "Clarify the winning equation",
    timeline: "0-90 days",
    focus: "Refine the value promise, identify execution guardrails, and define where margin pressure should and should not be absorbed."
  },
  {
    phase: "Phase 2",
    title: "Codify what scales",
    timeline: "3-9 months",
    focus: "Translate cultural and operating strengths into repeatable systems for talent, local marketing, and unit opening discipline."
  },
  {
    phase: "Phase 3",
    title: "Expand with sharper control points",
    timeline: "9-18 months",
    focus: "Deploy the growth agenda with clearer dashboards, market prioritization, and early-warning metrics across concepts."
  }
];

export const riskTable = [
  { risk: "Margin compression persists", mitigation: "Use mix, throughput, and labor discipline before forcing blunt price actions." },
  { risk: "Growth weakens cultural intensity", mitigation: "Elevate field leadership and codify operator practices that carry the brand promise." },
  { risk: "Competitive promotions distort traffic", mitigation: "Stay anchored in everyday value and emphasize experiential differentiation, not reactive discounting." },
  { risk: "Concept expansion distracts the core", mitigation: "Sequence investment based on capability readiness rather than concept ambition alone." }
];

export const roadmapItems = [
  { quarter: "Q1", workstream: "Pricing and value architecture", owner: "Executive team", metric: "Traffic retention, check mix", dependency: "Customer research synthesis" },
  { quarter: "Q2", workstream: "Operator playbook refresh", owner: "Field operations", metric: "Service consistency, labor efficiency", dependency: "Best-practice codification" },
  { quarter: "Q3", workstream: "Market growth prioritization", owner: "Development", metric: "Opening quality, payback period", dependency: "Real estate screening" },
  { quarter: "Q4", workstream: "Cross-concept capability transfer", owner: "Strategy + brand teams", metric: "Concept-level scorecards", dependency: "Leadership alignment" }
];

export const appendixLinks = [
  "2025 Form 10-K extracts and citation log",
  "Interview guide and transcript repository",
  "Review-mining codebook and tag definitions",
  "Financial model assumptions and bridge logic",
  "Field observation templates and market notes"
];
