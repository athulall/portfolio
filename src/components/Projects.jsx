import React from "react";
import "./Projects.css";

import ecommerceImg from "../assets/ecomm.jpeg";
import wImg from "../assets/weather.jpeg";
import taskImg from "../assets/taskmanager.jpeg";

const Projects = () => {

  const projects = [
    {
      title: "Clothing Store",
      description:
        "MERN clothing store with voice search, AI product description generator in admin dashboard.",
      image: ecommerceImg,
      link: "https://github.com/athulall/ecommerce"
    },
    {
      title: "AI Chatbot",
      description:
        "MERN AI chatbot system using OpenRouter API for intelligent conversations.",
      image: taskImg,
      link: "https://github.com/athulall/mern-Ai"
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React and modern UI design.",
      image: taskImg,
      link: "https://github.com/athulall/portfolio"
    },
    {
      title: "Weather App",
      description:
        "Weather application built using JavaScript, HTML, and CSS.",
      image: wImg,
      link: "https://github.com/athulall/js_mini_project_1.0"
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