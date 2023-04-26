import React from 'react'
import styles from '../styles.module.css'
import { Product } from '../../Product'
export const ProductsRelation = ({productsRelation}) => {
  return (
    <section className={styles.productsRelation}>
        <span className={styles.titleSection}>Productos Relacionados</span>
        <section className={styles.relationsContainer}>
          {productsRelation.slice(0, 3).map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </section>
      </section>
  )
}
