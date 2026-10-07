import os

def split_page():
    with open('src/app/page_original.tsx', 'r') as f:
        content = f.read()

    os.makedirs('src/components/sections', exist_ok=True)
    os.makedirs('src/components/ui', exist_ok=True)

    # We know the markers in the file
    markers = [
        ("NAVBAR", "Navbar.tsx", "Navbar"),
        ("HERO", "Hero.tsx", "Hero"),
        ("WORKING MODEL", "WorkingModel.tsx", "WorkingModel"),
        ("PLATFORM CAPABILITIES", "PlatformCapabilities.tsx", "PlatformCapabilities"),
        ("INVESTIGATION WORKFLOW", "InvestigationWorkflow.tsx", "InvestigationWorkflow"),
        ("SYSTEM ARCHITECTURE", "SystemArchitecture.tsx", "SystemArchitecture"),
        ("CTA", "CTA.tsx", "CTA"),
        ("FOOTER", "Footer.tsx", "Footer")
    ]
    
    sections = {}
    
    # Split the file by the comment blocks
    import re
    parts = re.split(r'\{\/\* =====================================================\n\s*([A-Z\s]+)\n\s*===================================================== \*\/\}\n', content)
    
    # The first part is the top of the file up to the first marker
    top_matter = parts[0]
    
    for i in range(1, len(parts), 2):
        name = parts[i].strip()
        code = parts[i+1]
        sections[name] = code.strip()

    # Create the components
    for marker, filename, component_name in markers:
        if marker in sections:
            code = sections[marker]
            
            # Remove the trailing </main> and other closing tags from FOOTER
            if marker == "FOOTER":
                code = re.sub(r'</main>\s*\);\s*}\s*$', '', code)
            
            with open(f'src/components/sections/{filename}', 'w') as f:
                f.write('import React from "react";\n')
                f.write('import { motion } from "framer-motion";\n')
                f.write('import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, CircleDot, Database, Eye, FileSearch, Fingerprint, GitBranch, Layers3, Lock, Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Sparkles, Target, Terminal, UserCheck, Workflow, Zap } from "lucide-react";\n')
                f.write('import Badge from "../ui/Badge";\n')
                f.write('import SectionHeading from "../ui/SectionHeading";\n')
                f.write('import { stages, workspaceItems, workflow } from "../constants";\n\n')
                
                # If Hero or WorkingModel, add activeStage props
                if marker in ["HERO", "WORKING MODEL"]:
                    f.write(f'export default function {component_name}({{ activeStage, setIsPaused }}: {{ activeStage: number, setIsPaused?: (v: boolean) => void }}) {{\n')
                else:
                    f.write(f'export default function {component_name}() {{\n')
                
                # Add local states if needed
                if marker == "WORKING MODEL":
                    f.write('  const [selectedWorkspace, setSelectedWorkspace] = React.useState(0);\n')
                
                f.write(f'  return (\n    <>\n      {code}\n    </>\n  );\n}}\n')

split_page()
