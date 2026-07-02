import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Terminal } from "lucide-react";
import "./ComingSoon.css";

const ComingSoon = () => {
  const [searchParams] = useSearchParams();
  const projectName = searchParams.get("project") || "Requested System Simulation";
  const [percent, setPercent] = useState(0);

  // Dynamic system boot simulation
  useEffect(() => {
    let currentPercent = 0;
    const interval = setInterval(() => {
      if (currentPercent >= 86) {
        clearInterval(interval);
      } else {
        const increment = Math.floor(Math.random() * 8) + 4; // increment by 4 to 12%
        currentPercent = Math.min(86, currentPercent + increment);
        setPercent(currentPercent);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  // ASCII representation of "COMING SOON"
  const asciiArt = `
  ____ ___  __  __ ___ _  _  ___     ___  ___   ___  _  _ 
 / ___/ _ \\|  \\/  |_ _| \\| |/ __|   / __|/ _ \\ / _ \\| \\| |
| (_| (_) | |\\/| || || .\` | (_ |   \\__ \\ (_) | (_) | .\` |
 \\____\\___/|_|  |_|___|_|\\_|\\___|   |___/\\___/ \\___/|_|\\_|
  `;

  return (
    <div className="cs-coming-soon-container">
      <div className="cs-terminal-box">
        {/* Terminal Header */}
        <div className="cs-terminal-title-bar">
          <div className="cs-terminal-dots">
            <span className="cs-terminal-dot red" />
            <span className="cs-terminal-dot yellow" />
            <span className="cs-terminal-dot green" />
          </div>
          <span className="cs-terminal-title">
            <Terminal size={12} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline' }} />
            Simulation_Engine_v2.0
          </span>
          <div style={{ width: '42px' }} /> {/* Spacer to align title center */}
        </div>

        {/* Terminal Body */}
        <div className="cs-terminal-body">
          {/* ASCII Banner */}
          <pre className="cs-ascii-art">{asciiArt}</pre>

          {/* System Specs */}
          <div className="cs-terminal-line">
            <span className="cs-terminal-label">[SYS_CONFIG]</span>
            <span className="cs-terminal-value">HOST: LOCALHOST_NODE_01</span>
          </div>
          <div className="cs-terminal-line">
            <span className="cs-terminal-label">[SYS_CONFIG]</span>
            <span className="cs-terminal-value">STACK: SANDBOX_EMULATOR_V2</span>
          </div>
          <div className="cs-terminal-line">
            <span className="cs-terminal-label">[SYS_CONFIG]</span>
            <span className="cs-terminal-value">TARGET_MODULE: "{projectName}"</span>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <span className="cs-terminal-bootstrap">&gt; INITIALIZING MODULE BOOTSTRAP...</span>
          </div>

          {/* Dynamic Progress Loader */}
          <div className="cs-progress-container">
            <div className="cs-progress-text-row">
              <span>SIMULATING_DEPLOYMENT_ENVIRONMENT</span>
              <span>{percent}%</span>
            </div>
            <div className="cs-progress-bar-track">
              <div
                className="cs-progress-bar-fill"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          <div>
            <span style={{ color: 'var(--color-muted-foreground)', fontSize: '0.8125rem' }}>
              // NOTICE: THE DEPLOYED SANDBOX ENVIRONMENT IS CURRENTLY BEING CONSTRUCTED
            </span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div className="cs-coming-soon-badge">
              COMING SOON !!!
            </div>
          </div>

          <div className="cs-terminal-prompt">
            <span className="cs-terminal-prompt-symbol">sys@shivasubrahmanyakc:~#</span>
            <span className="cs-terminal-value">
              {percent < 86 ? "downloading_dependencies..." : "awaiting_core_deployment_v2.0"}
            </span>
            <span className="cs-blinking-cursor" />
          </div>

          {/* Action Button */}
          <div className="cs-terminal-actions">
            <Link to="/" className="cs-back-btn">
              <ArrowLeft size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
              Return_to_Systems
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
