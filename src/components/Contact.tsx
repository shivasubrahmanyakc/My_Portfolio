import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSend = () => {
    const { name, email, message } = formData;

    // 1. Rate Limit Check (Client-side)
    const RATE_LIMIT_KEY = 'portfolio_last_contact_time';
    const COOLDOWN_MS = 60000; // 60 seconds
    const lastSent = localStorage.getItem(RATE_LIMIT_KEY);

    if (lastSent) {
      const timePassed = Date.now() - parseInt(lastSent);
      if (timePassed < COOLDOWN_MS) {
        const remaining = Math.ceil((COOLDOWN_MS - timePassed) / 1000);
        alert(`// RATE_LIMIT_EXCEEDED\n\nPlease wait ${remaining} seconds before re-initiating communication sequence.`);
        return;
      }
    }

    // 2. Validation
    if (!name || !email || !message) {
      alert("Please fill in all fields before executing.");
      return;
    }

    // 3. Update Email and Timestamp
    localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());

    const subject = `Portfolio Contact from ${name}`;
    const body = `${message}\n\nBest Regards\nContact Details:\nName: ${name}\nEmail: ${email}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=shivasubrahmanyakc@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Info / Terminal Header */}
          <div className="contact-info">
            <div className="contact-title-group">
              <span className="contact-index">Index_05</span>
              <h2 className="contact-heading">Initiate_Comm_Link</h2>
            </div>

            <p className="contact-description">
              Ready to collaborate on innovative projects or discuss opportunities in AI & Data Science.
              <br />
              <span className="contact-status">
                            // STATUS: OPEN_FOR_CONNECT
                <br />
                            // RESPONSE_TIME: &lt; 24h
              </span>
            </p>

            <div className="contact-links">
              <a href="https://github.com/shivasubrahmanyakc" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Github size={16} />
                <span className="contact-link-text">/github</span>
              </a>
              <a href="https://www.linkedin.com/in/shivasubrahmanyakc" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin size={16} />
                <span className="contact-link-text">/linkedin</span>
              </a>
              <a href="mailto:shivasubrahmanyakc@gmail.com" className="contact-link">
                <Mail size={16} />
                <span className="contact-link-text">/email</span>
              </a>
            </div>
          </div>

          {/* Terminal Input Form */}
          <div className="terminal-form">
            <div className="terminal-header">
              <div className="terminal-dot dot-red" />
              <div className="terminal-dot dot-yellow" />
              <div className="terminal-dot dot-green" />
              <span className="terminal-title">message_protocol.sh</span>
            </div>

            <div className="terminal-body">
              <div className="form-group">
                <label className="form-label">01 &gt; Input_Name</label>
                <input
                  placeholder="_"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">02 &gt; Input_Email</label>
                <input
                  type="email"
                  placeholder="_"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">03 &gt; Input_Message</label>
                <textarea
                  placeholder="// Type your message here..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button className="submit-btn" onClick={handleSend}>
                <span className="mr-2">&gt; Execute_Send</span>
                <Send size={12} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div>
            SYSTEM_ID: PORTFOLIO_V2.0 // DEPLOYED
          </div>
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} SHIVASUBRAHMANYA K C</span>
            <span className="footer-divider" />
            <span>LATEST_BUILD: {new Date().toLocaleDateString()}</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
