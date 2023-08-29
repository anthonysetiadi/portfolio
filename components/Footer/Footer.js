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
          <h1>Let&apos;s chat</h1>
          {/* <p>{data.contactSubHeading}</p> */}
          <a
            className={`${styles.emailLink} ${'link'}`}
            href={`mailto:${data.contactEmail}`}
          >
            {data.contactEmail}
          </a>
          <div className={styles.socialWrapper}>
            {data.social.map(socialLink => (
              <a
                className={styles.iconTag}
                key={socialLink.id}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="icon"
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
            <p>
              Find the source code to this portfolio{' '}
              <a
                href="https://github.com/anthonysetiadi/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#FF9720' }}
              >
                here.
              </a>
            </p>
            <p id={styles.copyright}>©️ {year}. All rights reserved.</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
