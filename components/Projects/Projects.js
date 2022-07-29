import React from 'react'
import ProjectCard from '../HOC/Cards/Projects.card/Projects.card.js'
import styles from './Projects.module.css'

import data from '../../anthonydata'

function Projects() {
  return (
    <div className="section" id={styles.projects}>
      <div className="container">
        <div className={styles.projectWrapper}>
          <h1>Projects</h1>
          <div className={styles.grid}>
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
