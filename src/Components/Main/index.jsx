import React from 'react'
import { ListOfProducts } from '../ListOfProducts'
import { FilterSection } from '../FilterSection'
import styles from './styles.module.css'
import tablet from './tablet.module.css'
import { Search } from '../Search'
export const Main = () => {
  return (
    <main className={`${styles.main} ${tablet.main}`}>
      <Search/>
      <FilterSection /> 
      <ListOfProducts />
    </main>
  )
}
