import { Database, GitBranch, ShieldAlert, Target, FileSearch, Activity, Radar, Sparkles, AlertTriangle, ShieldCheck, UserCheck, Shield, Network, Terminal, Fingerprint, BrainCircuit, Search, Zap } from "lucide-react";

export const stages = [
  {
    id: 0,
    title: "Ingestion & Validation",
    shortTitle: "INGEST",
    description:
      "Collects security events from multiple sources, validates incoming data and prepares it for analysis.",
    icon: Database,
    color: "emerald",
  },
  {
    id: 1,
    title: "Correlation Engine",
    shortTitle: "CORRELATE",
    description:
      "Connects related alerts, entities and events to transform isolated signals into meaningful security activity.",
    icon: GitBranch,
    color: "cyan",
  },
  {
    id: 2,
    title: "Risk Scoring",
    shortTitle: "RISK",
    description:
      "Prioritizes incidents using deterministic risk signals so analysts can focus on the most important activity.",
    icon: ShieldAlert,
    color: "amber",
  },
  {
    id: 3,
    title: "Threat Mapping",
    shortTitle: "MAP",
    description:
      "Maps observed activity to threat techniques and attack behaviors to provide useful investigation context.",
    icon: Target,
    color: "violet",
  },
  {
    id: 4,
    title: "Evidence & Enrichment",
    shortTitle: "EVIDENCE",
    description:
      "Builds an evidence-backed investigation view containing timelines, artifacts, relationships and supporting context.",
    icon: FileSearch,
    color: "rose",
  },
];

export const workspaceItems = [
  {
    title: "Incident Overview",
    description: "Prioritized incident summary",
    icon: AlertTriangle,
  },
  {
    title: "Attack Graph",
    description: "Entity and event relationships",
    icon: Network,
  },
  {
    title: "Evidence Timeline",
    description: "Chronological investigation view",
    icon: Activity,
  },
  {
    title: "AI Investigator",
    description: "Evidence-grounded investigation assistant",
    icon: BrainCircuit,
  },
  {
    title: "Analyst Actions",
    description: "Review, contain and respond",
    icon: UserCheck,
  },
];

export const workflow = [
  {
    title: "Detect",
    description: "Identify suspicious activity",
    icon: Radar,
  },
  {
    title: "Correlate",
    description: "Connect related signals",
    icon: GitBranch,
  },
  {
    title: "Prioritize",
    description: "Calculate incident risk",
    icon: ShieldCheck,
  },
  {
    title: "Investigate",
    description: "Build evidence and context",
    icon: Search,
  },
  {
    title: "Respond",
    description: "Enable analyst action",
    icon: Zap,
  },
];
