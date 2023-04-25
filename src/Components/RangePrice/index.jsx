import React from 'react'
import styles from './styles.module.css'
export const RangePrice = () => {
  return (
    <form className={styles.rangePrice}>
      <fieldset>
        <legend>Precio</legend>
        <input type='number' placeholder='100' />
        <span>-</span>
        <input type='number' placeholder='5000' />
      </fieldset>
    </form>
  )
}
