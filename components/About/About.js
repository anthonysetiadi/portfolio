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
                <br></br>
                {data.aboutParaTwo}
                <br></br>
                <br></br>
                {data.aboutParaThree}
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
