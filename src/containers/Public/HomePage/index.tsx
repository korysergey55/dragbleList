import React from 'react'
import Header from 'components/Header'
import styles from './styles.module.scss'
import QuoteApp from '../Examples/index'
import DragbleList from '../DragbleList/index'
import SomeDragbleLists from '../someDragbleLists'
import MultipleDragList from '../ExampleSome/index'
const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <h2 className={styles.title}>Food delivery</h2>
      {/* <DragbleList /> */}
      {/* <SomeDragbleLists /> */}
      <MultipleDragList />
    </div>
  )
}

export default HomePage
