/* eslint-disable @next/next/no-img-element */
import React from 'react'

import styles from './Hero.module.css'

import data from '../../anthonydata'

function Hero() {
  return (
    <div className="section" id={styles.hero}>
      <div className="sectionContainer">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Hi, I'm <span style={{ color: '#FF9720' }}>{data.name} </span>
            <span role="img" aria-label="Emoji">
              👋
            </span>
          </h1>
          <div className={styles.imageWrapper}>
            <img
              className={styles.profileImage}
              src={data.headerImage}
              alt="profile"
            />
          </div>
          <div className={styles.headingWrapper}>
            <h1>{data.headerTagline[0]}</h1>
            <h1>{data.headerTagline[1]}</h1>
            <h1>{data.headerTagline[2]}</h1>
          </div>
          <p className={styles.headerParagraph}>{data.headerParagraph}</p>
          <a href={`mailto:${data.contactEmail}`} className="primaryBtn">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
