import "./Education.css";

const Education = () => {
  const education = [
    {
      id: "EDU_01",
      degree: "Bachelor of Engineering - CSE (AIML)",
      institution: "Sahyadri College of Engineering and Management",
      location: "Adyar, Mangaluru",
      period: "2023 - 2027",
      status: "IN_PROGRESS",
      gpa: "9.48 / 10.0",
      description: "Specializing in Artificial Intelligence and Machine Learning. Focus: Practical applications & real-world problem solving."
    },
    {
      id: "EDU_02",
      degree: "Pre University Course (PCMB)",
      institution: "Vivekananda Pre University College",
      location: "Puttur",
      period: "2021 - 2023",
      status: "COMPLETED",
      gpa: "94.5%",
      description: "Foundation in Physics, Chemistry, Mathematics, Biology. Focus: Analytical & problem-solving skills."
    }
  ];

  const experience = [
    {
      id: "EXP_01",
      role: "Mentor",
      company: "Hack/Harbour 3.0",
      period: "Summer 2024",
      type: "Internship",
      description: "Mentored participants during a 10-day intensive bootcamp. Delivered technical sessions and guided project development."
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-wrapper">
        <div className="education-header">
          <div className="education-title-group">
            <span className="education-index">Index_04</span>
            <h2 className="education-heading">System_Logs & History</h2>
          </div>
        </div>

        <div className="education-content-grid">
          {/* Education Log */}
          <div className="log-column">
            <div className="log-header">
              <span className="log-dot" />
              <h3 className="log-title">Education_History</h3>
            </div>

            <div className="timeline">
              {education.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="degree-title">{edu.degree}</h4>
                      <span className="period-badge">{edu.period}</span>
                    </div>
                    <div className="institution-name">{edu.institution}</div>
                    <div className="timeline-details">
                      {edu.description}
                      <div className="timeline-status">
                        GPA: {edu.gpa} | STATUS: {edu.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Log */}
          <div className="log-column">
            <div className="log-header">
              <span className="log-dot" />
              <h3 className="log-title">Experience_Log</h3>
            </div>

            <div className="timeline">
              {experience.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="degree-title">{exp.role}</h4>
                      <span className="period-badge">{exp.period}</span>
                    </div>
                    <div className="institution-name">{exp.company} // {exp.type}</div>
                    <div className="timeline-details">
                      {exp.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;