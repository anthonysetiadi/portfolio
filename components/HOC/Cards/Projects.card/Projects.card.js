import React from 'react'
import Image from 'next/image'

// Icons
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import GitHubIcon from '@mui/icons-material/GitHub'

import styles from './Projects.card.module.css'

const browserTopBar =
  'https://ik.imagekit.io/antz/browserTopBar_CaAQMCTzD.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659060099796'

const ProjectCard = ({
  heading,
  paragraph,
  imgUrl,
  projectLink,
  list,
  githubLink,
  technology
}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.upperCard}>
        <div className={styles.card}>
          <img
            className={styles.browserOverlay}
            src={browserTopBar}
            alt="browser"
          />
          <div
            style={{ backgroundImage: `url(${imgUrl})` }}
            className={styles.cardImage}
          ></div>
        </div>
        <div className={styles.cardLinks}>
          {projectLink && (
            <a
              href={projectLink ? projectLink : '#'}
              id={styles.newTab}
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenInNewRoundedIcon />
              <span>Open in new tab</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              id={styles.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              <span>Source code</span>
            </a>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.header}>{heading}</h1>
        <p className={styles.text}>{paragraph}</p>
        <ul className={styles.list}>
          {list?.map(item => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
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
