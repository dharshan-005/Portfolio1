import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div role="listitem" className="pjt-item">
      <div className="pjt-card">
        <div className="pjt-card-image">
          <img src={project.image} alt={project.title} />
          <span className="pjt-index">
            {String(project.id).padStart(2, "0")}
          </span>
        </div>

        <div className="pjt-card-body">
          <div className="pjt-card-header">
            <h2 className="pjt-title">{project.title}</h2>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pjt-github"
            >
              <FaGithub className="github-icon" />
              <span className="github-text">GitHub</span>
              <FiArrowUpRight className="pjt-github-arrow" />
            </a>
          </div>

          <p className="pjt-desc">{project.description}</p>

          <ul className="pjt-tech">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
