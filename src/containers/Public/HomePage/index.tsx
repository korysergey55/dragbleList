import React, { useState } from 'react'
import Header from 'components/Header'
import styles from './styles.module.scss'

const HomePage = () => {
  const [myItems, setMyItems] = useState<string[]>([
    'apple',
    'avocado',
    'apricot',
    'pear',
    'grapefruit',
  ])
  return (
    <div className={styles.homeContainer}>
      <Header />
      <h2 className={styles.title}>Food delivery</h2>
      <div className={styles.container}>
        <ul className={styles.myList}>
          <h2 className={styles.title}>My delivery-list</h2>
          {myItems &&
            myItems.map(item => <li className={styles.item}>{item}</li>)}
        </ul>

        <div className={styles.wripper}>
          <ul className={styles.remuvebleList}>
            <h2 className={styles.title}>Food-list</h2>
            {myItems &&
              myItems.map(item => <li className={styles.item}>{item}</li>)}
          </ul>

          <ul className={styles.constantList}>
            <h2 className={styles.title}>Food-list-infinity</h2>
            {myItems &&
              myItems.map(item => <li className={styles.item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage
