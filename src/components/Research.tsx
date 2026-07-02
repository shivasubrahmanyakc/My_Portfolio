import { Activity, ExternalLink, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import "./Research.css";

const Research = () => {
    const researchItems = [
        {
            id: "01",
            title: "Multimodal Feature Level Fusion for Arecanut Quality Assessment",
            status: "Submitted — Elsevier Array / SSRN Preprint",
            description: "Developed a multimodal RGB–X-ray deep learning pipeline for arecanut quality classification, achieving 99.80% accuracy using CNN-based architectures with PyTorch and TensorFlow/Keras. Evaluated using cross-validation and standard classification metrics.",
            icon: <Activity size={20} />,
            technologies: ["Python", "PyTorch", "TensorFlow", "CNN", "Machine Learning", "Computer Vision"],
            linkUrl: "http://ssrn.com/abstract=6992593",
            features: [
                "Multimodal RGB and X-ray imagery fusion",
                "99.80% classification accuracy",
                "Cross-validation & standard classification metrics"
            ]
        },
        {
            id: "02",
            title: "Empowering Wildlife Conservation Through Real-Time Anti-Poaching System",
            status: "Published — IEEE DISCOVER 2025",
            description: "Co-authored a real-time IoT and AI based anti-poaching system using YOLOv8n for intrusion detection in wildlife reserves, with SMS-based alerting and explainable AI for forest official use.",
            icon: <Shield size={20} />,
            technologies: ["YOLOv8n", "IoT", "Python", "Explainable AI", "SMS Alerting", "Computer Vision"],
            linkUrl: "https://ieeexplore.ieee.org/document/11258983",
            features: [
                "Real-time intrusion detection via YOLOv8n",
                "SMS-based instant alert system for forest officials",
                "Explainable AI for transparent decision-making"
            ]
        }
    ];

    return (
        <section id="research" className="research-section">
            <div className="research-wrapper">
                <div className="research-header">
                    <div className="research-title-group">
                        <span className="research-index">Index_04</span>
                        <h2 className="research-heading">System_Research</h2>
                    </div>
                    <span className="research-count">
                        TOTAL_ENTRIES: {researchItems.length}
                    </span>
                </div>

                <div className="research-list">
                    {researchItems.map((item, index) => (
                        <div
                            key={item.title}
                            className="research-item"
                        >
                            <div className="research-grid">
                                {/* ID & Icon */}
                                <div className="research-meta">
                                    <span className="research-id">#{String(index + 1).padStart(2, '0')}</span>
                                    <div className="research-icon-wrapper">
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="research-content">
                                    <h3 className="research-title">
                                        {item.title}
                                    </h3>
                                    <div className="research-status-badge">
                                        STATUS: {item.status}
                                    </div>
                                    <p className="research-description">
                                        {item.description}
                                    </p>
                                    <ul className="research-features">
                                        {item.features.map((feature, i) => (
                                            <li key={i}>
                                                <span className="feature-bullet" /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="research-technologies">
                                        {item.technologies.map((tech) => (
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
                                <div className="research-actions">
                                    {item.linkUrl && item.linkUrl !== "#" && item.linkUrl !== "/Shivasubrahmanya_K_C_Resume.pdf" ? (
                                        <a
                                            href={item.linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary research-btn"
                                        >
                                            <ExternalLink size={12} />
                                            View_Abstract
                                        </a>
                                    ) : (
                                        <Link
                                            to={`/coming-soon?project=${encodeURIComponent(item.title)}`}
                                            className="btn btn-primary research-btn"
                                        >
                                            <ExternalLink size={12} />
                                            View_Abstract
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
