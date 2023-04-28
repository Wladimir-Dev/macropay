import React from 'react'
import styles from '../styles.module.css'
import tablet from '../tablet.module.css'
import { CheckIcon } from '../../Icons'
import { HappyCart } from '../../HappyCart'
export const Body = ({product}) => {
  return (
    <section className={`${styles.body} ${tablet.body}`}>
    <span className={`${styles.titleSection} ${tablet.titleSection}`}>
      Información detallada del producto
    </span>
    <div className={tablet.bodyDetails}>
      <section
        className={`${styles.containerImages} ${tablet.containerImages}`}
      >
        {product.images.slice(0, 4).map((imagen) => (
          <img key={imagen} src={imagen} alt='product' />
        ))}
      </section>
      {<div className={tablet.containerbodyRight}>
        <section className={styles.bodyDetails}>
          <div>
            <span className={styles.titleSection}>
              Otras Especificaciones
            </span>
          </div>
          <div>
            <label>Fabricante</label>
            <span className={styles.subTitle}>{product.brand}</span>
          </div>
          <div>
            <label>Porcentaje de Descuento</label>
            <span className={styles.subTitle}>
              {product.discountPercentage}%
            </span>
          </div>
          <div>
            <label>Reviews</label>
            <span className={styles.subTitle}>{product.rating}</span>
          </div>
        </section>
        <section className={`${styles.credito} ${tablet.credito}`}>
          <div>
            <label htmlFor=''>LLeva Este Producto a Crédito!</label>
            <span className={`${styles.subTitle} ${styles.gold}`}>
              ¿Qué Necesitas?
            </span>
            <small>
              <CheckIcon /> Tu Cuenta de Facebook
            </small>
            <small>
              <CheckIcon /> Tu INE Vigente
            </small>
            <small>
              <CheckIcon /> Correo Eletronico
            </small>
          </div>
          <HappyCart />
        </section>
      </div>}
    </div>
  </section>
  )
}
