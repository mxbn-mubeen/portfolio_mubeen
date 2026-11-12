export interface ProjectData {
  title: string;
  category: string;
  client: string;
  timeline: string;
  liveUrl?: string;
  githubUrl?: string;
  summary: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  challenges: string;
  solutions: string;
  architecture: string;
  codeSnippet?: { title: string; code: string };
}

export const projectsDatabase: Record<string, ProjectData> = {
  "ae-reporting": {
    title: "AE Reporting (AeroReporting)",
    category: "Phase III • Clinical Safety & Pharmacovigilance",
    client: "Clin Solution L.L.C (US)",
    timeline: "Nov 2025 – Present",
    liveUrl: "https://sideeffects.viginess.com/",
    summary: "An end-to-end, regulatory-compliant Adverse Event clinical safety reporting platform built to adhere to FDA and EMA E2B R3 (HL7 v3) XML standards.",
    metrics: [
      { label: "Standard Compliance", value: "100% E2B R3" },
      { label: "Languages Scaled", value: "137+ Tongues (RTL & LTR)" },
      { label: "Dictionary Engines", value: "MedDRA & WHODrug" }
    ],
    techStack: ["React.js", "TypeScript", "tRPC", "PostgreSQL", "Drizzle ORM", "Supabase", "Azure AI Translation", "Saas UI", "Zod"],
    challenges: "Generating valid E2B R3 XML schemas that comply with strict international regulatory bodies while supporting real-time multi-lingual entry across 137+ languages without incurring high cloud translation API costs or introducing submission latency.",
    solutions: "Architected a three-tier validation engine (Business Rules, XSD Schema, and MedDRA Vocabularies). Designed a Supabase PostgreSQL translation caching layer that prevented duplicate Azure AI requests and reduced translation overhead by 65%.",
    architecture: "React frontend with Saas UI connected via end-to-end type-safe tRPC APIs to a Node.js server. Persistent clinical reports, validation schemas, and dictionary lookups managed with Drizzle ORM on Supabase PostgreSQL.",
    codeSnippet: {
      title: "e2b-validator.ts",
      code: `// Three-tier clinical validation pipeline\nexport async function validateE2BSubmission(reportId: string) {\n  const report = await db.query.reports.findFirst({\n    where: eq(reports.id, reportId),\n    with: { adverseEvents: true, drugDoses: true }\n  });\n  // 1. Zod schema validation\n  const validated = E2BReportSchema.parse(report);\n  // 2. MedDRA hierarchy mapping verification\n  await verifyMedDRATerms(validated.adverseEvents);\n  // 3. Compile E2B R3 HL7 v3 compliant XML\n  return generateE2BXml(validated);\n}`
    }
  },
  "caviti-ai": {
    title: "Caviti AI",
    category: "Phase II • High-Velocity AI SaaS Platform",
    client: "Caviti AI",
    timeline: "2024 – 2025",
    liveUrl: "https://caviti.ai/",
    summary: "Autonomous inventory management & AI agents for Dental SupplyOps. Features interactive telemetry dashboards, type-safe API communication, and scalable PostgreSQL database schemas.",
    metrics: [
      { label: "API Latency Reduction", value: "-30%" },
      { label: "Workflow Velocity", value: "+40%" },
      { label: "Query Optimization", value: "25% Fewer Trips" }
    ],
    techStack: ["React.js", "TypeScript", "tRPC", "PostgreSQL", "Drizzle ORM", "Chakra UI", "TanStack Query"],
    challenges: "Managing complex cross-component dashboard state while preventing data desynchronization and eliminating runtime API mismatches between client and server.",
    solutions: "Engineered an end-to-end type-safe tRPC layer, configured TanStack Query for optimal multi-level client caching, and indexed relational PostgreSQL tables to prevent full-table scans.",
    architecture: "React frontend with Chakra UI and TanStack Query, connecting to Node.js tRPC procedures with Drizzle ORM managing relational schemas."
  },
  "otteri-ai": {
    title: "Otteri.ai",
    category: "Phase II • Frontend & Component Architecture",
    client: "Nexobe",
    timeline: "2024 – 2025",
    summary: "Developed high-velocity frontend interfaces at Nexobe. Built core UI components and streaming chat workflows for Otteri.ai (multi-model AI workspace), and independently engineered the full dynamic blog section for GoodOff (goodoff.co/blog).",
    metrics: [
      { label: "Core Workspace", value: "Otteri.ai" },
      { label: "GoodOff Subsystem", value: "Full Blog Engine" },
      { label: "Component Reuse", value: "85% Shared" }
    ],
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Design Systems", "TanStack Query", "tRPC", "AI Streaming UI"],
    challenges: "Developing responsive streaming interfaces for Otteri.ai's multi-model AI workspace, while building an end-to-end SEO-optimized blog platform for GoodOff.",
    solutions: "Implemented virtualized message streams for real-time LLM token rendering and built a modular blog layout system with reading time calculations, category filtering, and semantic HTML structure.",
    architecture: "React and TypeScript architecture utilizing tRPC for type-safe backend queries, custom hooks for streaming text updates, and token-driven design systems.",
    codeSnippet: {
      title: "StreamingChatView.tsx",
      code: `// Multi-model streaming message orchestrator\nexport const useStreamingChat = (modelId: string) => {\n  const [chunks, setChunks] = useState<string[]>([]);\n  const trpc = useTRPC();\n\n  const streamPrompt = async (prompt: string) => {\n    const response = await trpc.ai.generateStream.mutate({ modelId, prompt });\n    for await (const delta of response) {\n      setChunks((prev) => [...prev, delta.text]);\n    }\n  };\n  return { chunks, streamPrompt };\n};`
    }
  },
  "ai-projects-suite": {
    title: "Otteri.ai",
    category: "Phase II • Frontend & Component Architecture",
    client: "Nexobe",
    timeline: "2024 – 2025",
    summary: "Developed high-velocity frontend interfaces at Nexobe. Built core UI components and streaming chat workflows for Otteri.ai (multi-model AI workspace), and independently engineered the full dynamic blog section for GoodOff (goodoff.co/blog).",
    metrics: [
      { label: "Core Workspace", value: "Otteri.ai" },
      { label: "GoodOff Subsystem", value: "Full Blog Engine" },
      { label: "Component Reuse", value: "85% Shared" }
    ],
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Design Systems", "TanStack Query", "tRPC", "AI Streaming UI"],
    challenges: "Developing responsive streaming interfaces for Otteri.ai's multi-model AI workspace, while building an end-to-end SEO-optimized blog platform for GoodOff.",
    solutions: "Implemented virtualized message streams for real-time LLM token rendering and built a modular blog layout system with reading time calculations, category filtering, and semantic HTML structure.",
    architecture: "React and TypeScript architecture utilizing tRPC for type-safe backend queries, custom hooks for streaming text updates, and token-driven design systems.",
    codeSnippet: {
      title: "StreamingChatView.tsx",
      code: `// Multi-model streaming message orchestrator\nexport const useStreamingChat = (modelId: string) => {\n  const [chunks, setChunks] = useState<string[]>([]);\n  const trpc = useTRPC();\n\n  const streamPrompt = async (prompt: string) => {\n    const response = await trpc.ai.generateStream.mutate({ modelId, prompt });\n    for await (const delta of response) {\n      setChunks((prev) => [...prev, delta.text]);\n    }\n  };\n  return { chunks, streamPrompt };\n};`
    }
  },
  "marine-debris": {
    title: "Marine Debris Detection System",
    category: "Phase I • AI & Computer Vision Research",
    client: "Academic Capstone",
    timeline: "2024",
    githubUrl: "https://github.com/mxbn-mubeen/MARINE-DEBRIS-DETECTION-SYSTEM",
    summary: "Deep learning computer vision system designed to detect, classify, and track marine debris in aquatic ecosystems using custom convolutional neural networks.",
    metrics: [
      { label: "Domain", value: "Ocean Conservation" },
      { label: "Model Architecture", value: "Custom CNN" },
      { label: "Pipeline", value: "OpenCV + Keras" }
    ],
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "NumPy"],
    challenges: "Accurately identifying small marine plastic and debris particles across varying water turbidity, turbulent wave surfaces, and inconsistent underwater lighting conditions.",
    solutions: "Applied adaptive histogram equalization (CLAHE) image preprocessing and trained custom CNN classifiers with transfer learning to achieve high detection accuracy.",
    architecture: "Python ML pipeline with OpenCV for frame preprocessing, TensorFlow/Keras for inference, and Flask serving classification endpoints."
  },
  "ai-virtual-mouse": {
    title: "AI Virtual Mouse Using Hand Gestures",
    category: "Phase I • Human-Computer Interaction & Computer Vision",
    client: "Computer Vision Research Project",
    timeline: "2024",
    githubUrl: "https://github.com/mxbn-mubeen/AI_Virtual_Mouse_Using_Hand_Gestures",
    summary: "A touchless computer vision control system that replaces physical mouse hardware by interpreting real-time hand gestures captured via webcam using MediaPipe 21-landmark tracking.",
    metrics: [
      { label: "Landmarks Tracked", value: "21 3D Points" },
      { label: "Detection Confidence", value: "60% Threshold" },
      { label: "Resolution Mapped", value: "640x480 to Screen" }
    ],
    techStack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "NumPy"],
    challenges: "Handling rapid hand jitter and erratic cursor jumps caused by lighting variations or camera noise, while accurately distinguishing intentional clicks from incidental finger movements.",
    solutions: "Implemented linear coordinate interpolation with an adjustable smoothening factor (8.0) and designed a dual-mode finite state machine: Moving Mode (Index finger only) and Clicking Mode (Index + Middle pinch with Euclidean distance < 35px).",
    architecture: "Python pipeline featuring an isolated HandTrackingModule for BGR-to-RGB conversion, landmark extraction, and Euclidean distance calculation, interfaced with PyAutoGUI for OS-level cursor and click dispatching.",
    codeSnippet: {
      title: "AI_Virtual_Mouse.py",
      code: `# Gesture evaluation & cursor smoothing logic\nif fingers[1] == 1 and fingers[2] == 0:\n    # Moving Mode: Index finger raised\n    x3 = np.interp(x1, (frameR, wCam - frameR), (0, wScr))\n    y3 = np.interp(y1, (frameR, hCam - frameR), (0, hScr))\n    clocX = plocX + (x3 - plocX) / smoothening\n    clocY = plocY + (y3 - plocY) / smoothening\n    pyautogui.moveTo(wScr - clocX, clocY)\n\nelif fingers[1] == 1 and fingers[2] == 1:\n    # Clicking Mode: Index + Middle pinched\n    length, img, _ = detector.findDistance(8, 12, frame)\n    if length < 35:\n        pyautogui.click()`
    }
  }
};

