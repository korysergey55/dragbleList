import React from 'react'
import Header from 'components/Header'
import styles from './styles.module.scss'
import DraggbleList from '../DraggbleList/index'
import DragbleTwoList from '../DragbleTwoList'
import MyTwoList from '../MyTwoList/index'
const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <h2 className={styles.title}>Food delivery</h2>
      {/* <DraggbleList /> */}
      {/* <DragbleTwoList /> */}
      <MyTwoList />
    </div>
  )
}

export default HomePage
