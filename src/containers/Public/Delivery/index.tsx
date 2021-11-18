import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { IItem } from './types'
import DeliveryItem from './Item'

import styles from './style.module.scss'
import { LiComponent } from './Item/Styled'

const initial = [
  { id: '1', content: 'apple' },
  { id: '2', content: 'avocado' },
  { id: '3', content: 'apricot' },
  { id: '4', content: 'pear' },
  { id: '5', content: 'grapefruit' },
]

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}
const Item = ({ item, index }: any) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {provided => (
        <LiComponent
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </LiComponent>
      )}
    </Draggable>
  )
}

const ItemList = React.memo(function ItemList({ products }: any) {
  return (
    products &&
    products.map((item: any, index: number) => (
      <Item item={item} index={index} key={item.id} />
    ))
  )
})
const Delivery = () => {
  const [state, setState] = useState<any>({ products: initial })

  function onDragEnd(result: any) {
    if (!result.destination) {
      return
    }
    if (result.destination.index === result.source.index) {
      return
    }
    const quotes = reorder(
      state.products,
      result.source.index,
      result.destination.index
    )
    setState(quotes)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        <div className={styles.wripperMyList}>
          <h2 className={styles.title}>My delivery-list</h2>
          <Droppable droppableId="myList">
            {provided => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                <ItemList products={state.products} />
              </ul>
            )}
          </Droppable>
        </div>

        <div className={styles.wripper}>
          <ul className={styles.remuvebleList}>
            <h2 className={styles.title}>Food-list</h2>
            {state.products &&
              state.products.map((item: any, index: any) => (
                <DeliveryItem key={index}>{item.content}</DeliveryItem>
              ))}
          </ul>

          <ul className={styles.constantList}>
            <h2 className={styles.title}>Food-list-infinity</h2>
            {state.products &&
              state.products.map((item: any, index: any) => (
                <DeliveryItem key={index}>{item.content}</DeliveryItem>
              ))}
          </ul>
        </div>
      </div>
    </DragDropContext>
  )
}

export default Delivery
