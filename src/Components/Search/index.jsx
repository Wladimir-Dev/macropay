import React from 'react'
import { SearchIcon } from '../Icons'

import styles from './styles.module.css'
import tablet from './tablet.module.css'
import { useProduct } from '../../hooks/useProduct'

export const Search = () => {
  const { getCollection, setFiltros, filtros } = useProduct()
  const currentCategory = filtros.categoria
  const categorias = getCollection('category')

  
  const handleSelectChange = (e) => {
    setFiltros((prev) => ({ ...prev, categoria: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    //si el busqueda actual es igual a la anterior, no hacemos la petición
    if (filtros.busqueda == e.target.busqueda.value) return
    
    setFiltros((prev) => ({ ...prev, busqueda: e.target.busqueda.value }))
  }

  return (
    <form
      action=''
      onSubmit={handleSubmit}
      className={`${styles.search} ${tablet.search}`}
    >
      <div className={`${styles.orderContainer} ${tablet.orderContainer}`}>
        <label>Ordernar por</label>
        <label>Mejores reviews</label>
      </div>
      <div className={`${styles.container} ${tablet.container}`}>
        <button type='submit' className={styles.buttonSubmit}>
          <SearchIcon />
        </button>
        <input
          className={styles.inputSearch}
          type='text'
          name='busqueda'
          id=''
          placeholder='Encuentra el producto que necesitas'
        />
        <select name='' id='' value={currentCategory} onChange={handleSelectChange}>
          <option value='/'>Todas Las Categorías</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.category}>
              {categoria.category}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}
