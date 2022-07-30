import React from 'react'
import Image from 'next/image'

import styles from './Footer.module.css'

import data from '../../anthonydata'

function Footer() {
  const date = new Date()
  let year = date.getFullYear()

  return (
    <div className="section" id="contact">
      <div className="sectionContainer">
        <div className={styles.footerContainer}>
          <h1>Let's chat</h1>
          {/* <p>{data.contactSubHeading}</p> */}
          <a className={styles.emailLink} href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className={styles.socialWrapper}>
            {data.social.map(socialLink => (
              <a
                className={styles.icons}
                key={socialLink.id}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={socialLink.img}
                  alt={socialLink.alt}
                  width={32}
                  height={32}
                />
              </a>
            ))}
          </div>
          <span>
            <p>
              Made by{' '}
              <a
                href={data.social[0].url}
                target="_blank"
                rel="noopeener noreferrer"
                style={{ color: '#FF9720' }}
              >
                Anthony Setiadi
              </a>{' '}
              with <icon>❤</icon> and lots of <icon>☕</icon>
            </p>
            <p id={styles.copyright}>©️ {year}. All rights reserved.</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
