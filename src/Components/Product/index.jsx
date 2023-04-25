import React from 'react'
import styles from './styles.module.css'
import { HeartIcon, StarFillIcon, StarIcon } from '../Icons'
export const Product = ({ title, price, rating, thumbnail, description }) => {
  return (
    <article className={styles.product}>
      <img src={thumbnail} alt={description} />
      <div className={styles.body}>
        <div className={styles.description}>
          <h2>{title}</h2>
          {/* <small>{rating}</small> */}
          <div>
            <StarFillIcon/>
            <StarFillIcon/>
            <StarFillIcon/>
            <StarFillIcon/>
            <StarIcon />
          </div>
        </div>
        <span>${price}</span>
      </div>
      <div className={styles.footer}>
        <button type='button'>Lo Quiero!</button>
      </div>
      <button className={styles.likeButton}>
        <HeartIcon />
      </button>
    </article>
  )
}
