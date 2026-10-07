import re
import os

with open("src/app/page.tsx", "r") as f:
    content = f.read()

# Make sure ui and sections directories exist
os.makedirs("src/components/ui", exist_ok=True)
os.makedirs("src/components/sections", exist_ok=True)

# 1. Extract data constants and UI components to a shared file
# We will just leave them in page.tsx for now or create a lib/constants.ts
# Let's extract them into src/components/constants.ts
constants_match = re.search(r'(const stages = \[.*?\];).*?(const workspaceItems = \[.*?\];).*?(const workflow = \[.*?\];)', content, re.DOTALL)
if constants_match:
    with open("src/components/constants.ts", "w") as f:
        f.write('import { Database, GitBranch, ShieldAlert, Target, FileSearch, Activity, Radar, Sparkles, AlertTriangle, ShieldCheck, UserCheck, Shield } from "lucide-react";\n\n')
        f.write(constants_match.group(1) + "\n\n")
        f.write(constants_match.group(2) + "\n\n")
        f.write(constants_match.group(3) + "\n")

# 2. Extract UI components
badge_match = re.search(r'function Badge\(\{.*?\}\) \{.*?\}', content, re.DOTALL)
if badge_match:
    with open("src/components/ui/Badge.tsx", "w") as f:
        f.write('import React from "react";\n\n')
        f.write(f'export default {badge_match.group(0)}\n')

heading_match = re.search(r'function SectionHeading\(\{.*?\}\) \{.*?\}', content, re.DOTALL)
if heading_match:
    with open("src/components/ui/SectionHeading.tsx", "w") as f:
        f.write('import React from "react";\n\n')
        f.write(f'export default {heading_match.group(0)}\n')

print("Refactor script generated.")
