import React from 'react'
import styles from "./Button.module.css"
const Button = ({btn_name}) => {
  return (
    <div className={`${styles.button} poppins-semibold`}>{btn_name}</div>
  )
}

export default Button