import React from 'react'
import styles from './styles.module.css'
import { useProduct } from '../../hooks/useProduct'

export const RangePrice = () => {
  const { setFiltros, MAX_VALUE } = useProduct()

  const handleMinPrice = (e) => {
    setFiltros((prev) => ({
      ...prev,
      minPrecio: e.target.value == '' ? 0 : e.target.value,
    }))
  }

  const handleMaxPrice = (e) => {
    setFiltros((prev) => ({
      ...prev,
      maxPrecio: e.target.value == '' ? MAX_VALUE : e.target.value,
    }))
  }

  return (
    <form className={styles.rangePrice}>
      <fieldset>
        <legend>Precio</legend>
        <input type='number' placeholder='100' onChange={handleMinPrice} />
        <span>-</span>
        <input type='number' placeholder='5000' onChange={handleMaxPrice} />
      </fieldset>
    </form>
  )
}
