import React from 'react'
import Header from 'components/Header'
import Delivery from '../Delivery'
import styles from './styles.module.scss'

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <h2 className={styles.title}>Food delivery</h2>
      <Delivery />
    </div>
  )
}

export default HomePage
