import os
import re

def split_page():
    with open('src/app/page_original.tsx', 'r') as f:
        content = f.read()

    markers = [
        ("CAPABILITIES", "PlatformCapabilities.tsx", "PlatformCapabilities"),
        ("WORKFLOW", "InvestigationWorkflow.tsx", "InvestigationWorkflow"),
        ("ARCHITECTURE", "SystemArchitecture.tsx", "SystemArchitecture"),
    ]
    
    sections = {}
    
    parts = re.split(r'\{\/\* =====================================================\n\s*([A-Z\s]+)\n\s*===================================================== \*\/\}\n', content)
    
    for i in range(1, len(parts), 2):
        name = parts[i].strip()
        code = parts[i+1]
        sections[name] = code.strip()

    for marker, filename, component_name in markers:
        if marker in sections:
            code = sections[marker]
            
            with open(f'src/components/sections/{filename}', 'w') as f:
                f.write('import React from "react";\n')
                f.write('import { motion } from "framer-motion";\n')
                f.write('import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, CircleDot, Database, Eye, FileSearch, Fingerprint, GitBranch, Layers3, Lock, Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Sparkles, Target, Terminal, UserCheck, Workflow, Zap } from "lucide-react";\n')
                f.write('import Badge from "../ui/Badge";\n')
                f.write('import SectionHeading from "../ui/SectionHeading";\n')
                f.write('import { stages, workspaceItems, workflow } from "../constants";\n\n')
                f.write(f'export default function {component_name}() {{\n')
                f.write(f'  return (\n    <>\n      {code}\n    </>\n  );\n}}\n')

split_page()
