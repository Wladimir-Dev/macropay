import React, { useState } from 'react'
import { HappyIcon } from '../Icons'
import styles from './styles.module.css'
export const HappyCart = () => {
  const INITIAL_VALUE = 520
  const [engache, setEnganche] = useState(INITIAL_VALUE)
  return (
    <div className={styles.happyCart}>
      <HappyIcon />
      <label htmlFor=''>¿Te Falta una Lanita?</label>
      <span>Enganche ${engache}</span>
      <span>Pago Semanal ${(engache / 4.16).toFixed(2)}</span>
      <div>
        <input
          type='range'
          name=''
          min='420'
          max='1500'
          id=''
          defaultValue='520'
          onChange={(e) => setEnganche(e.target.value)}
        />
        <span className={styles.spanRange}>Enganche</span>
      </div>
      <button type='button'>Aplicar ahora</button>
    </div>
  )
}
