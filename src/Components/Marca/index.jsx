import React from 'react'
import styles from './styles.module.css'
export const Marca = ({ marca }) => {
  return (
    <div key={marca.id} className={styles.ItemsMarca}>
      <input type='checkbox' id={marca.id} />
      <label htmlFor={marca.id}>{marca.brand}</label>
    </div>
  )
}
