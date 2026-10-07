import re
import os

with open("src/app/page_original.tsx", "r") as f:
    content = f.read()

os.makedirs("src/components/ui", exist_ok=True)
os.makedirs("src/components", exist_ok=True)

constants_match = re.search(r'(const stages = \[.*?\];).*?(const workspaceItems = \[.*?\];).*?(const workflow = \[.*?\];)', content, re.DOTALL)
if constants_match:
    with open("src/components/constants.ts", "w") as f:
        f.write('import { Database, GitBranch, ShieldAlert, Target, FileSearch, Activity, Radar, Sparkles, AlertTriangle, ShieldCheck, UserCheck, Shield, Network, Terminal, Fingerprint } from "lucide-react";\n\n')
        f.write('export ' + constants_match.group(1).replace('const stages', 'const stages') + "\n\n")
        f.write('export ' + constants_match.group(2) + "\n\n")
        f.write('export ' + constants_match.group(3) + "\n")

badge_match = re.search(r'function Badge\(\{.*?\}\) \{.*?return \((.*?)\);\n\}', content, re.DOTALL)
if badge_match:
    with open("src/components/ui/Badge.tsx", "w") as f:
        f.write('import React from "react";\n\n')
        f.write('export default function Badge({ children, dark }: { children: React.ReactNode; dark?: boolean; }) {\n')
        f.write(f'  return ({badge_match.group(1)}  );\n}}\n')

heading_match = re.search(r'function SectionHeading\(\{.*?\}\) \{.*?return \((.*?)\);\n\}', content, re.DOTALL)
if heading_match:
    with open("src/components/ui/SectionHeading.tsx", "w") as f:
        f.write('import React from "react";\n\n')
        f.write('export default function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string; }) {\n')
        f.write(f'  return ({heading_match.group(1)}  );\n}}\n')
