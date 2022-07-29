import React from 'react'
import Image from 'next/image'

// Icons
import browserTopBar from '../../../../public/browser-top-bar.svg'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import GitHubIcon from '@mui/icons-material/GitHub'

import styles from './Projects.card.module.css'

const ProjectCard = ({
  heading,
  paragraph,
  imgUrl,
  projectLink,
  githubLink,
  technology
}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.upperCard}>
        <div className={styles.card}>
          <Image
            className={styles.browserOverlay}
            src={browserTopBar}
            alt="browser top bar"
            layout="fill"
          />
          <Image
            src={imgUrl}
            className={styles.cardImage}
            alt="project"
            layout="fill"
          />
        </div>
        <div className={styles.cardLinks}>
          <a
            href={projectLink ? projectLink : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <OpenInNewRoundedIcon
              className="btn"
              id="open-new"
              fontSize="medium"
            />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="btn" id="github" fontSize="medium" />
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.header}>{heading}</h1>
        <p className={styles.text}>{paragraph}</p>
        <div className={styles.techWrapper}>
          {technology.map(tech => (
            <p key={tech.id} className={styles.badge}>
              {tech.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
