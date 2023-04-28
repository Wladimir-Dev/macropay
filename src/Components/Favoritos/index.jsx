import React, { useId } from 'react'
import styles from './styles.module.css'
import { HeartFillIcon } from '../Icons'
import { useProduct } from '../../hooks/useProduct'
export const Favoritos = () => {
  const { setShowFavorite,showFavorite } = useProduct()
  const checkId = useId()
  const handleChange = (e) => {
    setShowFavorite(e.target.checked)
  }
  return (
    <section className={styles.favoritos}>
      <input type='checkbox' name='' id={checkId} checked={showFavorite} onChange={handleChange} />
      <label htmlFor={checkId} className={styles.titleFilter}>
        Favoritos
        <HeartFillIcon />
      </label>
    </section>
  )
}
