import React from 'react'
import { SearchIcon } from '../Icons'

import styles from './styles.module.css'
import tablet from './tablet.module.css'

export const Search = () => {
  return (
    <form action='' className={`${styles.search} ${tablet.search}`}>
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
          name=''
          id=''
          placeholder='Encuentra el producto que necesitas'
        />
        <select name='' id='' defaultValue=''>
          <option value=''>Todas Las Categorias</option>
          <option value='2'>categ2</option>
        </select>
      </div>
    </form>
  )
}
