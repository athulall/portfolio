import React from "react";
import "./Projects.css";

import ecommerceImg from "../assets/ecommerce.png";
import portfolioImg from "../assets/portfolio.png";
import taskImg from "../assets/taskmanager.png";

const Projects = () => {

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Full stack MERN e-commerce application with authentication and cart system.",
      image: ecommerceImg,
      link: "https://yourprojectlink.com"
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React and modern UI design.",
      image: portfolioImg,
      link: "https://yourportfoliolink.com"
    },
    {
      title: "Task Manager App",
      description:
        "CRUD application with Node.js, Express and MongoDB.",
      image: taskImg,
      link: "https://yourtaskmanagerlink.com"
    }
  ];

  return (
    <section className="project-div" id="projects">
      <h1 className="project-title">My Projects</h1>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">
                  View Project
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;