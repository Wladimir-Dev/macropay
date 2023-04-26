import React from 'react'
import styles from './styles.module.css'
import { HeartFillIcon, HeartIcon, StarFillIcon, StarIcon } from '../Icons'
import { useProduct } from '../../hooks/useProduct'
import { Link } from 'react-router-dom'
export const Product = ({
  id,
  title,
  price,
  thumbnail,
  description,
  onlyPhoto,
}) => {
  const { filtros, removeFavProduct, addFavProduct } = useProduct()
  const isFavorite = filtros.favoritos.includes(id)
  const handleClick = () => {
    isFavorite ? removeFavProduct(id) : addFavProduct(id)
  }
  const setScroll = () => {
    window.scrollTo(0, 0)
  }
  return (
    <article className={styles.product}>
      <Link to={`/detailsProduct/${id}`}>
        <img src={thumbnail} alt={description} onClick={setScroll} />
      </Link>
      {!onlyPhoto && (
        <>
          <div className={styles.body}>
            <div className={styles.description}>
              <Link to={`/detailsProduct/${id}`}>
                <h2 onClick={setScroll}>{title}</h2>
              </Link>
              <div>
                <StarFillIcon />
                <StarFillIcon />
                <StarFillIcon />
                <StarFillIcon />
                <StarIcon />
              </div>
            </div>
            <span>${price}</span>
          </div>
          <div className={styles.footer}>
            <button type='button'>Lo Quiero!</button>
          </div>
        </>
      )}
      <button className={styles.likeButton} onClick={handleClick}>
        {isFavorite ? <HeartFillIcon /> : <HeartIcon />}
      </button>
    </article>
  )
}
