import React, { useId } from 'react'
import styles from './styles.module.css'
import { HeartFillIcon } from '../Icons'
export const Favoritos = () => {
  const checkId = useId()
  return (
    <section className={styles.favoritos}>
      <label htmlFor={checkId} className={styles.titleFilter}>
        Favoritos
        <HeartFillIcon />
      </label>
      <input type='checkbox' name='' id={checkId} hidden />
    </section>
  )
}
