import React from 'react'
import styles from  "./LeftNav.module.css"
import leftArrow from '../../assets/left.png'
const LeftNavButton = ({className}) => {
  return (
    <button className={`${styles.custom_prev} ${className}`}>
        <img src={leftArrow} alt="left"/>
    </button>
  )
}

export default LeftNavButton