import { Award, ExternalLink } from "lucide-react";
import "./Certificates.css";

const Certificates = () => {
    const certificates = [
        {
            id: "01",
            title: "AICTE IBM SkillsBuild Gen AI & Cloud Computing Internship",
            issuer: "AICTE × IBM SkillsBuild × BharatCares",
            category: "AI & Cloud",
            url: "https://drive.google.com/file/d/1hynapzO7J7ofk6mS-RZwLGBRd_i_02-8/view?usp=sharing",
        },
        {
            id: "02",
            title: "Cloud Computing Fundamentals",
            issuer: "Online Certification",
            category: "Cloud",
            url: "https://drive.google.com/file/d/1xeeODU0QaoQHv_wtURyjoUiZiW8gCYdp/view?usp=sharing",
        },
        {
            id: "03",
            title: "Data Science in Our World",
            issuer: "Online Certification",
            category: "Data Science",
            url: "https://drive.google.com/file/d/1eMZiwhh-U1ix-Y0L9kEhtq_WEhaJL0tz/view?usp=drive_link",
        },
        {
            id: "04",
            title: "Database Management System Part - 1",
            issuer: "Online Certification",
            category: "Database",
            url: "https://drive.google.com/file/d/1ywwecOPQkLS6Po6maOOWaPTmMpLnsqUG/view?usp=sharing",
        },
        {
            id: "05",
            title: "Database Management System Part - 2",
            issuer: "Online Certification",
            category: "Database",
            url: "https://drive.google.com/file/d/1FOgBpt8toA5kY3bxpqQkMfpuwh6Mz5tR/view?usp=sharing",
        },
        {
            id: "06",
            title: "Getting Started with Generative AI",
            issuer: "Online Certification",
            category: "AI",
            url: "https://drive.google.com/file/d/10cVSSPWOTXghjj6oIIrHuy3_Orm5S_z9/view?usp=sharing",
        },
        {
            id: "07",
            title: "Introduction to Data Science",
            issuer: "Online Certification",
            category: "Data Science",
            url: "https://drive.google.com/file/d/1H6ZxOxBZ3yotaTjESDhKsgFdrBP_sbb2/view?usp=sharing",
        },
        {
            id: "08",
            title: "Machine Learning with TensorFlow",
            issuer: "Online Certification",
            category: "Machine Learning",
            url: "https://drive.google.com/file/d/1EHWDhzBnCKEGOOwqY2-ehy9zDrRcbrtI/view?usp=sharing",
        },
        {
            id: "09",
            title: "Master Computer Vision™ OpenCV3 in Python and Machine Learning",
            issuer: "Online Certification",
            category: "Computer Vision",
            url: "https://drive.google.com/file/d/1_XWyB_ZxJ7AUNvrEaZRW3GZCGhneaduW/view?usp=sharing",
        },
        {
            id: "10",
            title: "Python for Data Science",
            issuer: "Online Certification",
            category: "Data Science",
            url: "https://drive.google.com/file/d/1kf_--xH-YyuIR6ssE84NG9il7org3_T5/view?usp=sharing",
        },
        {
            id: "11",
            title: "Software Engineering",
            issuer: "Online Certification",
            category: "Engineering",
            url: "https://drive.google.com/file/d/1PP8SrPYgHTN4h-KRvGv8QaAg-JTzENXK/view?usp=sharing",
        },
        {
            id: "12",
            title: "Software Testing Essentials and Fundamentals",
            issuer: "Online Certification",
            category: "Engineering",
            url: "https://drive.google.com/file/d/1W1rtnN45oz9k_DADqgjqjTEJ9xWOm_Eq/view?usp=sharing",
        },
        {
            id: "13",
            title: "Technoverse — Cognizant",
            issuer: "Cognizant",
            category: "Industry",
            url: "https://drive.google.com/file/d/1-vttowy9lTK5uBH3b08MMs5CNoe2nZ-w/view?usp=sharing",
        },
        {
            id: "14",
            title: "Text Mining & Social Network Analysis",
            issuer: "Online Certification",
            category: "Data Science",
            url: "https://drive.google.com/file/d/1S2maF8scD7w4th1vb_QEc3aLFmCft9HQ/view?usp=sharing",
        },
    ];

    return (
        <section id="certificates" className="cert-section">
            <div className="cert-wrapper">
                {/* Header */}
                <div className="cert-header">
                    <div className="cert-title-group">
                        <span className="cert-index">Index_06</span>
                        <h2 className="cert-heading">Certifications_Log</h2>
                    </div>
                    <span className="cert-count">
                        TOTAL_ENTRIES: {certificates.length}
                    </span>
                </div>

                {/* Grid */}
                <div className="cert-grid">
                    {certificates.map((cert) => (
                        <a
                            key={cert.id}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card"
                            id={`cert-${cert.id}`}
                        >
                            <div className="cert-card-top">
                                <span className="cert-card-id">#{cert.id}</span>
                                <span className="cert-category-badge">
                                    {cert.category}
                                </span>
                            </div>

                            <div className="cert-card-body">
                                <div className="cert-icon-wrapper">
                                    <Award size={18} />
                                </div>
                                <h3 className="cert-card-title">{cert.title}</h3>
                                <p className="cert-card-issuer">{cert.issuer}</p>
                            </div>

                            <div className="cert-card-footer">
                                <span className="cert-view-label">
                                    <ExternalLink size={11} />
                                    View_Certificate
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
