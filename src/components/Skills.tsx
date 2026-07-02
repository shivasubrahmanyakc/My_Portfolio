import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      id: "SYS_01",
      title: "Languages",
      skills: ["Python", "SQL", "Java", "C/C++", "HTML/CSS", "JavaScript"]
    },
    {
      id: "SYS_02",
      title: "Frameworks & Libraries",
      skills: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "React", "Node.js", "Express.js", "LangChain", "LangGraph"]
    },
    {
      id: "SYS_03",
      title: "Databases & Stack",
      skills: ["MongoDB", "MERN Stack"]
    },
    {
      id: "SYS_04",
      title: "AI, ML & Data Science",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Data Science",
        "Data Analysis",
        "Data Visualization",
        "Feature Engineering",
        "Model Training & Evaluation",
        "Predictive Modeling"
      ]
    },
    {
      id: "SYS_05",
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Jupyter",
        "Docker",
        "Vercel",
        "MongoDB Atlas",
        "Postman",
        "n8n",
        "Power BI",
        "Figma",
        "Miro",
        "Canva"
      ]
    },
    {
      id: "SYS_06",
      title: "Soft Skills & Contributions",
      skills: [
        "Strategic Thinking",
        "Problem-Solving",
        "Collaboration",
        "Leadership",
        "Teaching & Mentoring",
        "300+ LeetCode Solved",
        "IEEE Chair – CIS Student Branch",
        "Open Source Contributor"
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        <div className="skills-header">
          <div className="skills-title-group">
            <span className="skills-index">Index_02</span>
            <h2 className="skills-heading">Technical_Specifications</h2>
          </div>
          <p className="skills-description">
            // COMPREHENSIVE TOOLKIT FOR DATA TRANSFORMATION AND INTELLIGENT SOLUTIONS
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <div className="skill-category-header">
                <h3 className="skill-category-title">{category.title}</h3>
                <span className="skill-category-id">{category.id}</span>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className="skill-dot" />
                    <span className="skill-name">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
