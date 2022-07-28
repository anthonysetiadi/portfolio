import React from 'react'
import Navbar from '../Navbar/Navbar'

import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.section}>{children}</div>
    </>
  )
}
