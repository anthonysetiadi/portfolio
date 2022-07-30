import React from 'react'

import styles from './Promotion.module.css'

import data from '../../anthonydata'

function Promotion() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className={styles.promotionContainer}>
          <h1>{data.promotionHeading}</h1>
          <p>{data.promotionParaOne}</p>
          <br></br>
          <p>{data.promotionParaTwo}</p>
        </div>
      </div>
    </div>
  )
}

export default Promotion
