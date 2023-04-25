import React from 'react'
import { ListOfProducts } from '../ListOfProducts'
import { FilterSection } from '../FilterSection'
import styles from './styles.module.css'
export const Main = () => {
  return (
    <main className={styles.main}>
      <FilterSection />
      <ListOfProducts />
    </main>
  )
}
