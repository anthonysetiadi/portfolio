import React, { useState } from 'react'
import Image from 'next/image'

// Icons
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import antzLogo from '../../public/AntzLogo.svg'
import styles from './Navbar.module.css'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)
  const handleCloseMenu = () => setShowMenu(false)

  const menuItems = [
    {
      type: 'link',
      title: {
        name: 'About'
      },
      link: '#about'
    },
    {
      type: 'link',
      title: {
        name: 'Work'
      },
      link: '#work'
    },
    {
      type: 'link',
      title: {
        name: 'Projects'
      },
      link: '#projects'
    },
    {
      type: 'link',
      title: {
        name: 'Contact'
      },
      link: '#contact'
    }
  ]

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <a href="#">
          <div className={styles.left} onClick={handleCloseMenu}>
            <Image
              className={styles.logo}
              alt="Antz Logo"
              src={antzLogo}
              width={24}
              height={24}
            />
            <h1 className={styles.title}>
              antz.<span>dev</span>
            </h1>
          </div>
        </a>
        <div className={styles.right}>
          <div className={styles.mobileMenu} onClick={toggleMenu}>
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </div>
          <nav
            className={[
              styles.menuWrapper,
              showMenu ? styles.menuOpen : styles.menuClose
            ].join(' ')}
          >
            {menuItems.map(item => (
              <a
                key={item.title.name}
                href={item.link}
                onClick={handleCloseMenu}
              >
                {item.title.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
