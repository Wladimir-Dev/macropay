import React from 'react'
import styles from '../styles.module.css'
import tablet from '../tablet.module.css'
import { ArrowRightIcon, StarFillIcon, StarIcon } from '../../Icons'
import { Product } from '../../Product'
import { useNavigate } from 'react-router-dom'
// import styles from '../styles.module.css'
export const Header = ({product}) => {
    const navigate = useNavigate()
  return (
    <section className={styles.header}>
      <div
        className={`${styles.BreadcrumbContainer} ${tablet.BreadcrumbContainer}`}
      >
        <h3 className={styles.goBack} onClick={() => navigate(-1)}>
          volver atras
        </h3>
        <label>
          {product.category}/{product.brand}/{product.title}
        </label>
      </div>
      <section
        className={`${styles.generalInformation} ${tablet.generalInformation}`}
      >
        <Product {...product} onlyPhoto={true} />
        <div
          className={`${styles.descriptionContainer} ${tablet.descriptionContainer}`}
        >
          <div className={`${styles.titleContainer} ${tablet.titleContainer}`}>
            <h2>{product.title}</h2>
            <span>${product.price}</span>
          </div>
          <div
            className={`${styles.reviesContainer} ${tablet.reviesContainer}`}
          >
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarIcon />
          </div>
          <p>{product.description}</p>
          <button type='button'>
            Lo Quiero a Crédito <ArrowRightIcon />
          </button>
        </div>
      </section>
    </section>
  )
}
