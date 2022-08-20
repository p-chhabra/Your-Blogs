import React from 'react'
import styles from './Button.module.css'

//Button Model
const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className={styles.third + ` z-10 ` + styles.btn}>{props.children}</button>
  )
}

export default Button