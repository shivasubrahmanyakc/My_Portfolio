import { Trophy, ExternalLink, Code2, Users, Star } from "lucide-react";
import "./Achievements.css";

const Achievements = () => {
    const achievements = [
        {
            id: "01",
            title: "RIDA — IEEE YESIST12 Special Track Finalist",
            date: "April 2026",
            category: "Hackathon",
            icon: <Trophy size={18} />,
            description:
                "Presented a clinical decision support tool using a biomedical knowledge graph and GraphSAGE GNN to return ranked rare-disease diagnoses, aimed at reducing diagnostic delay for under-resourced GPs.",
            url: "https://github.com/shivasubrahmanyakc/RIDA---Rare-Intelligence-for-Disease-Analysis",
            urlLabel: "View_GitHub",
        },
        {
            id: "02",
            title: "StreamSentinel — IEEE YESIST12 WePOWER Track Finalist",
            date: "April 2026",
            category: "Hackathon",
            icon: <Star size={18} />,
            description:
                "Presented a federated-learning IoT platform for real-time water quality anomaly detection in rural communities, held at Manipal Institute of Technology, Bengaluru.",
            url: null,
            urlLabel: null,
        },
        {
            id: "03",
            title: "VEDHA — VVCE EdTech Hackathon Finalist",
            date: "Nov 2024",
            category: "Hackathon",
            icon: <Trophy size={18} />,
            description:
                "Built Edu-Ease, an assistive learning app for special-needs children with AI-based assessments, text-to-speech and speech-to-text, and adaptive content; selected as finalist among national entries.",
            url: "https://github.com/shivasubrahmanyakc/EDUEASE",
            urlLabel: "View_GitHub",
        },
        {
            id: "04",
            title: "Chair — IEEE Student Branch & Computational Intelligence Society",
            date: "2025 – Present",
            category: "Leadership",
            icon: <Users size={18} />,
            description:
                "Coordinate technical events and student participation in competitions as Chair of the IEEE Student Branch and Computational Intelligence Society.",
            url: null,
            urlLabel: null,
        },
        {
            id: "05",
            title: "LeetCode 300+ Problems Solved",
            date: "Ongoing",
            category: "DSA",
            icon: <Code2 size={18} />,
            description:
                "Solved 300+ DSA problems covering arrays, trees, graphs, and linked lists on LeetCode.",
            url: "https://leetcode.com/u/shivasubrahmanya/",
            urlLabel: "View_Profile",
        },
    ];

    return (
        <section id="achievements" className="achieve-section">
            <div className="achieve-wrapper">
                {/* Header */}
                <div className="achieve-header">
                    <div className="achieve-title-group">
                        <span className="achieve-index">Index_05</span>
                        <h2 className="achieve-heading">Achievements_Log</h2>
                    </div>
                    <span className="achieve-count">
                        TOTAL_ENTRIES: {achievements.length}
                    </span>
                </div>

                {/* List */}
                <div className="achieve-list">
                    {achievements.map((item, index) => (
                        <div key={item.id} className="achieve-item">
                            <div className="achieve-grid">
                                {/* Meta */}
                                <div className="achieve-meta">
                                    <span className="achieve-id">
                                        #{String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="achieve-icon-wrapper">
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="achieve-content">
                                    <h3 className="achieve-title">{item.title}</h3>
                                    <div className="achieve-badges">
                                        <span className="achieve-status-badge">
                                            {item.category}
                                        </span>
                                        <span className="achieve-date-badge">
                                            {item.date}
                                        </span>
                                    </div>
                                    <p className="achieve-description">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Action */}
                                <div className="achieve-actions">
                                    {item.url ? (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary achieve-btn"
                                            id={`achieve-link-${item.id}`}
                                        >
                                            <ExternalLink size={12} />
                                            {item.urlLabel}
                                        </a>
                                    ) : (
                                        <span className="achieve-no-link">
                                            ★ Finalist
                                        </span>
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

export default Achievements;
