import React from 'react'
import Image from 'next/image'

import styles from './Technology.module.css'

import data from '../../anthonydata'

function Technology() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className={styles.skillsContainer}>
          <h1>Technology</h1>
          <div className={styles.grid}>
            {data.skills.map(skill => (
              <div className={styles.tech} key={skill.id}>
                <Image
                  src={skill.img}
                  alt={skill.para}
                  className={styles.icons}
                  width={64}
                  height={64}
                />
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
