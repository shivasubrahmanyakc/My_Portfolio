import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profilePhoto from "../../images/profile.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">

        {/* Profile Image */}
        <div className="profile-container">
          <div className="profile-image-wrapper">
            <img
              src={profilePhoto}
              alt="Shivasubrahmanya K C"
              className="profile-image"
            />
            {/* Technical Markers */}
            <div className="corner-marker-tl" />
            <div className="corner-marker-br" />
          </div>
          {/* Background Grid Decoration */}
          <div className="bg-grid-decoration" />
        </div>

        {/* Text Content */}
        <div className="text-content">
          <div className="header-group">
            <div className="identity-badge">
              <span className="status-dot" />
              <span className="identity-text">Identity Verified</span>
            </div>
            <h1 className="hero-title">
              SHIVASUBRAHMANYA
              <br />
              <span className="hero-subtitle">K C</span>
            </h1>
          </div>

          <div className="divider" />

          <div className="hero-description">
            Data Science_ & Machine Learning Engineer_
            <span className="hero-description-detail">
              Transforming raw data into actionable intelligence. Specialized in statistical modeling and innovative AI solutions.
            </span>
          </div>

          <div className="actions">
            <button
              className="btn btn-outline"
              style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              [ View_Work ]
            </button>
            <a
              href="/Shivasubrahmanya_K_C_Resume.pdf"
              download="Shivasubrahmanya_K_C_Resume.pdf"
              className="btn btn-ghost"
              style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none' }}
            >
              [ Download_Resume_v2.pdf ]
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/shivasubrahmanyakc" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={30} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/in/shivasubrahmanyakc" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={30} strokeWidth={1.5} />
            </a>
            <a href="mailto:shivasubrahmanyakc@gmail.com" className="social-icon">
              <Mail size={30} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-text">
          <ArrowDown size={16} />
          SCROLL_TO_EXPLORE
        </div>
      </div>
    </section>
  );
};


export default Hero;
