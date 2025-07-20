import React from 'react'
import  styles from "./RightNav.module.css"
import rightArrow from '../../assets/right.png'

const RightNavButton = ({className}) => {
  return (
     <button className={`${styles.custom_next} ${className}`}>
           <img src={rightArrow} alt="right" />
       </button>
  )
}

export default RightNavButton