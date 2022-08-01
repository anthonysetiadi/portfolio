/* eslint-disable @next/next/no-img-element */
import React from 'react'

import styles from './Hero.module.css'

import data from '../../anthonydata'

function Hero() {
  return (
    <div className="section" id="hero">
      <div className="sectionContainer">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Hi, I'm <span style={{ color: '#FF9720' }}>{data.name} </span>
            <span role="img" aria-label="wave emoji">
              👋
            </span>
          </h1>
          <div className={styles.imageWrapper}>
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={data.heroImage}
              width={200}
            >
              <source src={data.heroVideo} type="video/quicktime" />
              <source src={data.heroVideoWebM} type="video/webm" />
              <img
                className={styles.profileImage}
                src={data.heroImage}
                alt="profile"
              />
            </video>
          </div>
          <div className={styles.headingWrapper}>
            <h1>{data.heroTagline[0]}</h1>
            <h1>{data.heroTagline[1]}</h1>
            <h1>{data.heroTagline[2]}</h1>
          </div>
          <p className={styles.heroParagraph}>{data.heroParagraph}</p>
          <a href="#about" className="primaryBtn">
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
