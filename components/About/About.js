import React from 'react'

import styles from './About.module.css'

import data from '../../anthonydata'

function About() {
  return (
    <div className="section" id="about">
      <div className="sectionContainer">
        <div className={styles.aboutWrapper}>
          <h1>About Me</h1>
          <div className={styles.aboutSection}>
            <div className={styles.content}>
              <p>
                {data.aboutParaOne}
                <br></br>
                <br></br>I now work as a freelance front-end web developer and
                am continuing to improve my coding and design skills. I also run
                a side hustle{' '}
                {
                  <a
                    href="http://ryskape.com"
                    style={{ color: '#FF9720' }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @Ryskape{' '}
                  </a>
                }
                where we sell cool desk accessories. When I’m not coding, I love
                playing basketball or spending time with my wife and three kids.
                <br></br>
                <br></br>
                And lastly, I can't survive without a good cup of coffee{' '}
                <span role="img" aria-label="coffe emoji">
                  ☕
                </span>
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <img
                className={styles.aboutImage}
                src={data.aboutImage}
                alt="about"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
