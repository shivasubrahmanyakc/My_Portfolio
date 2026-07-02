import { ExternalLink, Github, Clock, Users, Utensils, Mail, Bell, Brain, HeartPulse, Bot, Activity, Network } from "lucide-react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Digital Time Machine",
      description: "A Machine Learning project that transforms present-day images into historically accurate past renditions of the same locations, bridging time by recreating the visual essence of different historical eras.",
      icon: <Clock size={20} />,
      technologies: ["Machine Learning", "Computer Vision", "Python", "Image Processing"],
      demoUrl: "#",
      codeUrl: "https://github.com/shivasubrahmanyakc/Digital-time-Machine",
      features: [
        "Historical image transformation",
        "Visual essence recreation",
        "Interactive time travel experience",
        "Advanced ML algorithms"
      ],
    },
    {
      id: "02",
      title: "Edu Ease",
      description: "Your Personalized Learning Companion - A web platform with speech recognition & text-to-speech for accessibility. Features personalized and gamified learning modules for enhanced engagement.",
      icon: <Users size={20} />,
      technologies: ["JavaScript", "HTML", "CSS", "Speech Recognition", "Text-to-Speech"],
      demoUrl: "https://eduease-hazel.vercel.app/",
      codeUrl: "https://github.com/shivasubrahmanyakc/EDUEASE",
      features: [
        "Speech recognition integration",
        "Text-to-speech functionality",
        "Personalized learning paths",
        "Gamified learning modules"
      ],
    },
    {
      id: "03",
      title: "Foodwallah",
      description: "Food Ordering Web Application - A fully frontend-based food ordering web app built with HTML, CSS, and JavaScript. Designed to be responsive and interactive for an engaging user experience.",
      icon: <Utensils size={20} />,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX", "React"],
      demoUrl: "#",
      codeUrl: "https://github.com/Manvith-kumar16/FoodWallah",
      features: [
        "Responsive web design",
        "Interactive user interface",
        "Real-world food ordering simulation",
        "Modern web technologies"
      ],
    },
    {
      id: "04",
      title: "RAG Chatbot (PDF Intelligence System)",
      description:
        "An n8n-powered Retrieval-Augmented Generation (RAG) chatbot that enables intelligent question-answering over large PDF documents like Amazon’s Annual Report. The system converts documents into vector embeddings, retrieves relevant context, and generates accurate, context-aware responses using modern LLMs.",
      icon: <Mail size={20} />,
      technologies: ["n8n", "Pinecone", "Ollama Embeddings", "Gemini", "RAG"],
      demoUrl: "#",
      codeUrl: "https://github.com/shivasubrahmanyakc/n8n-Automations/tree/main/RAG%20agent",
      features: [
        "Automated PDF ingestion and chunking from Google Drive",
        "Vector storage and semantic search using Pinecone",
        "Context-aware chatbot with memory support",
        "Local embeddings via Ollama for cost-efficient retrieval"
      ],
    },
    {
      id: "05",
      title: "Slack Notification Bot",
      description:
        "An n8n workflow that sends instant Slack alerts for important triggers like new form submissions or database updates. Ensures teams never miss critical updates.",
      icon: <Bell size={20} />,
      technologies: ["n8n", "Slack API", "Webhooks"],
      demoUrl: "#",
      codeUrl: "https://github.com/shivasubrahmanyakc/n8n-Automations/tree/main/Order_E-mail_Automation",
      features: [
        "Real-time Slack alerts",
        "Webhook-based triggers",
        "Customizable channel notifications",
        "Streamlined team communication"
      ],
    },
    {
      id: "06",
      title: "AI Mental Wellness & Burnout Assistant",
      description:
        "A full-stack AI-powered mental wellness application that analyzes emotions, detects burnout, and provides personalized wellness recommendations using advanced machine learning models.",
      icon: <Brain size={20} />,
      technologies: [
        "FastAPI",
        "Streamlit",
        "Hugging Face",
        "OpenCV",
        "Faster Whisper",
        "Microsoft Azure",
        "Docker"
      ],
      demoUrl: "#",
      codeUrl: "https://github.com/shivasubrahmanyakc/AI-Mental-Wellness-and-Burnout-Assistant",
      features: [
        "Text, face, voice, and video emotion analysis",
        "AI-driven burnout assessment",
        "Personalized wellness suggestions",
        "Anonymous privacy-first mode",
        "Real-time emotion tracking",
        "Azure cloud deployment"
      ],
    },
    {
      id: "07",
      title: "SynergySphere – Team Collaboration MVP",
      description:
        "A full-stack team collaboration MVP that enables project management, task tracking, real-time communication, and smart notifications with a modern, responsive UI.",
      icon: <Users size={20} />,
      technologies: [
        "React",
        "TypeScript",
        "FastAPI",
        "MySQL",
        "WebSockets",
        "JWT",
        "CSS3"
      ],
      demoUrl: "#",
      codeUrl: "https://github.com/shivasubrahmanyakc/SynergySpherre",
      features: [
        "JWT-based authentication and role management",
        "Project and task management system",
        "Real-time collaboration using WebSockets",
        "In-app and email notifications",
        "Responsive modern UI",
        "Secure backend with FastAPI and MySQL"
      ],
    },
    {
      id: "08",
      title: "College Mentorship Platform",
      description:
        "A full-stack mentorship platform connecting college seniors (mentors) with juniors (mentees), featuring role-based access, resources sharing, leaderboards, and admin moderation.",
      icon: <Users size={20} />,
      technologies: [
        "FastAPI",
        "React",
        "TypeScript",
        "MySQL",
        "SQLAlchemy",
        "JWT",
        "Tailwind CSS"
      ],
      demoUrl: "#",
      codeUrl: "https://github.com/shivasubrahmanyakc/College-Placement-Mentorship",
      features: [
        "JWT-based authentication with role-based access",
        "Mentor directory with advanced filters",
        "Posts and resources with admin moderation",
        "Real-time chat using polling",
        "Leaderboard with DB triggers and procedures",
        "Admin dashboard and verification workflow"
      ],

    },
    {
      id: "09",
      title: "AI Health Tracker",
      description:
        "An AI-powered health tracking platform that helps users monitor daily health metrics, analyze meals and mood, and receive personalized insights to improve overall well-being.",
      icon: <HeartPulse size={20} />,
      technologies: [
        "React 19",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Recharts",
        "AI Analytics"
      ],
      demoUrl: "https://health-tracker-nine-indol.vercel.app/",
      codeUrl: "https://github.com/shivasubrahmanyakc/Health-Tracker",
      features: [
        "Daily health score calculation (steps, water, sleep, mood)",
        "AI-based health risk assessment",
        "Smart food analysis (Healthy vs Junk detection)",
        "Personalized AI diet plans & recommendations",
        "Interactive dashboards with charts and trends",
        "Mood & stress tracking with historical insights",
        "Achievement badges and streak system"
      ],
    },
    {
      id: "10",
      title: "Sasta OpenClaw — Gemini Gateway",
      description: "A lightweight, multi-gateway AI agent orchestrator powered by Google's Gemini API. Supports dual-interface access through an HTTP REST API and a Telegram bot, featuring integrated tool-calling, persistent session storage, and long-term semantic memory.",
      icon: <Bot size={20} />,
      technologies: ["Python", "Gemini API", "Telegram Bot API", "REST API", "Semantic Memory", "Tool Calling"],
      demoUrl: "#",
      codeUrl: "https://github.com/shivasubrahmanyakc/sasta_openclaw",
      features: [
        "Telegram & REST API gateways with session persistence",
        "Tool integration for file system operations, shell commands, and web search",
        "Semantic search long-term memory via custom embeddings",
        "Automated command safety checker and robust permission system"
      ],
    },
    {
  id: "11",
  title: "Code Evolution Intelligence — Temporal GNN for Software Change Prediction",
  description: "An AI-powered software engineering intelligence platform that models code evolution as temporal AST graphs to predict future code changes and detect buggy code states using Graph Neural Networks and Transformers.",
  icon: <Network size={20} />,
  technologies: [
    "PyTorch",
    "PyTorch Geometric",
    "Transformer",
    "Tree-sitter",
    "GitPython",
    "Streamlit",
    "NetworkX"
  ],
  demoUrl: "#",
  codeUrl: "https://github.com/shivasubrahmanyakc/Code-Evolution-Intelligence",
  features: [
    "Transforms Git commit history into Abstract Syntax Tree (AST) graphs and learns structural code evolution patterns",
    "Hybrid GNN + Transformer architecture for temporal code representation, predicting future code changes and bug likelihood",
    "Automated end-to-end pipeline covering commit extraction, AST parsing, graph construction, sequence generation, model training, and evaluation",
    "Interactive Streamlit application providing live repository analysis, change prediction, bug risk estimation, and evolution visualizations"
  ]
},
    {
      id: "12",
      title: "RIDA — Rare Intelligence for Disease Analysis",
      description: "A clinical decision support platform designed to reduce diagnostic delay for rare diseases. Combines a Heterogeneous Graph Neural Network (HeteroGNN) reasoning over a massive Orphanet/HPO/OMIM biomedical knowledge graph with a BioBERT + FAISS semantic retrieval pipeline.",
      icon: <Activity size={20} />,
      technologies: ["PyTorch Geometric", "BioBERT", "FAISS", "FastAPI", "React", "Express", "MongoDB Atlas"],
      demoUrl: "#",
      codeUrl: "https://github.com/shivasubrahmanyakc/RIDA---Rare-Intelligence-for-Disease-Analysis",
      features: [
        "Multi-ontology Knowledge Graph (Orphanet, HPO, OMIM integration)",
        "HeteroGNN model ranking potential differential diagnoses",
        "BioBERT + FAISS semantic similarity search for fast symptom query resolution",
        "Privacy-first clinical decision support with zero patient data storage"
      ],
    },
    {
      id: "13",
      title: "NeuralScan AI — EEG-based Brain Disorder Classification",
      description: "An end-to-end neuro-diagnostic ML pipeline and full-stack interactive dashboard for analyzing 19-Channel electroencephalography (EEG) data. Classifies Alzheimer’s Disease, Frontotemporal Dementia, and Cognitively Normal profiles using CNN-BiLSTM and Graph Convolutional Networks (GCN).",
      icon: <Brain size={20} />,
      technologies: ["TensorFlow 2", "MNE-Python", "FastAPI", "React", "react-force-graph-2d", "GCN", "Signal Processing"],
      demoUrl: "#",
      codeUrl: "https://github.com/shivasubrahmanyakc/NeuralScan-AI-EEG-based-Brain-Disorder-Classification.",
      features: [
        "Hybrid CNN-BiLSTM temporal classifier with Spatial Attention",
        "Functional connectivity networks built via 19x19 coherence adjacency matrices",
        "Interactive 3-layer Graph Convolutional Network (GCN)",
        "Dynamic brain topomaps rendered live on a modern dashboard"
      ],
    },
    {
  id: "14",
  title: "ÆSCULAPIUS — Self-Healing Multi-Agent RAG Platform",
  description: "A production-grade agentic Retrieval-Augmented Generation (RAG) platform that autonomously detects retrieval failures, rewrites queries, verifies generated responses, and self-heals without human intervention using an 8-agent LangGraph workflow.",
  icon: <Bot size={20} />,
  technologies: [
    "LangGraph",
    "FastAPI",
    "React",
    "Pinecone",
    "LangChain",
    "Llama 3.1",
    "Google Gemini",
    "BAAI/bge-m3",
    "Tailwind CSS"
  ],
  demoUrl: "#",
  codeUrl: "https://github.com/shivasubrahmanyakc/AESCULAPIUS",
  features: [
    "8-agent AI workflow for query analysis, retrieval, reranking, context evaluation, self-healing, generation, hallucination verification, and confidence scoring",
    "Autonomous self-healing pipeline with up to three intelligent query rewrites when retrieval quality falls below threshold",
    "Cross-encoder reranking using BAAI bge-reranker-large with Pinecone vector search for highly relevant document retrieval",
    "Grounded answer generation with hallucination verification, multi-factor confidence scoring, and real-time analytics dashboard"
  ]
}
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrapper">
        <div className="projects-header">
          <div className="projects-title-group">
            <span className="projects-index">Index_03</span>
            <h2 className="projects-heading">System_Projects</h2>
          </div>
          <span className="projects-count">
            TOTAL_ENTRIES: {projects.length}
          </span>
        </div>

        <div className="projects-list">
          {[...projects].reverse().map((project, index) => (
            <div
              key={project.title}
              className="project-item"
            >
              <div className="project-grid">
                {/* ID & Icon */}
                <div className="project-meta">
                  <span className="project-id">#{String(index + 1).padStart(2, '0')}</span>
                  <div className="project-icon-wrapper">
                    {project.icon}
                  </div>
                </div>

                {/* Main Content */}
                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="project-actions">
                  {project.demoUrl && project.demoUrl !== "#" ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-btn"
                    >
                      <ExternalLink size={12} />
                      View_Demo
                    </a>
                  ) : (
                    <Link
                      to={`/coming-soon?project=${encodeURIComponent(project.title)}`}
                      className="btn btn-primary project-btn"
                    >
                      <ExternalLink size={12} />
                      View_Demo
                    </Link>
                  )}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost project-btn"
                  >
                    <Github size={12} />
                    Source_Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
