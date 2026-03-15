import React from 'react'
import './Skill.css'

const Skill = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "Bootstrap",
    "Git", "MongoDB", "Express.js", "Node.js",
    "React", "Python", "MySQL"
  ];

  return (
    <section className="skill-section" id="skills">
      <h1 className="skill-title">My Skills</h1> 

      <div className="skill-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill