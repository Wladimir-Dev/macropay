import React from 'react'
import { StarIcon } from '../Icons'
import styles from './styles.module.css'
export const Review = () => {
  return (
    <section className={styles.review}>
      <label className={styles.titleFilter}>Reviews</label>
      <div className={styles.body}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </section>
  )
}
