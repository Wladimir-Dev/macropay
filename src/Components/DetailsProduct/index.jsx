import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../hooks/useProduct'

import styles from './styles.module.css'
import tablet from './tablet.module.css'

import { Header } from './Header'
import { Body } from './Body'
import { ProductsRelation } from './ProductsRelation'
import { Footer } from './Footer'
export const DetailsProduct = () => {
  const { id } = useParams()
  const { getProduct, getProductsRelation } = useProduct()

  const product = getProduct(id)
  const productsRelation = getProductsRelation(product.id, product.category)

  return (
    <section className={`${styles.detailsProduct} ${tablet.detailsProduct}`}>
      <Header product={product} />
      <Body product={product} />
      <ProductsRelation productsRelation={productsRelation} />
      <Footer />
    </section>
  )
}
