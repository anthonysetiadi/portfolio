import ProjectCard from '../HOC/Cards/Projects.card/Projects.card.js'

import data from '../../anthonydata'

function Projects() {
  return (
    <div className="section" id="projects">
      <div className="sectionContainer">
        <div className="gridWrapper">
          <h1>Projects</h1>
          <div className="grid">
            {data.projects.map(project => (
              <ProjectCard
                key={project.id}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
                githubLink={project.githubLink}
                technology={project.technology}
              ></ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
