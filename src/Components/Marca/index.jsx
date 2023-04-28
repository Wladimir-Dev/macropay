import React from 'react'
import styles from './styles.module.css'
import { useProduct } from '../../hooks/useProduct'

export const Marca = ({ marca }) => {
  const { setFiltros, filtros, removeMarca } = useProduct()
  const isChecked = filtros.marcas.includes(marca.brand)
  const copia = filtros

  const handleCheck = (e) => {
    if (e.target.checked) {
      copia.marcas.push(e.target.value)
      setFiltros((prev) => ({ ...prev, marcas: copia.marcas }))
    } else {
      removeMarca(e.target.value)
    }
  }
  return (
    <div key={marca.brand} className={styles.ItemsMarca}>
      <input
        type='checkbox'
        id={marca.brand}
        value={marca.brand}
        checked={isChecked}
        onChange={handleCheck}
      />
      <label htmlFor={marca.brand}>{marca.brand}</label>
    </div>
  )
}
