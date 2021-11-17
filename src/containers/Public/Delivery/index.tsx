import React, { useState } from 'react'
import { IItem } from './types'
import Item from './Item'

import styles from './style.module.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const initial = [
  { id: '1', content: 'apple' },
  { id: '2', content: 'avocado' },
  { id: '3', content: 'apricot' },
  { id: '4', content: 'pear' },
  { id: '5', content: 'grapefruit' },
]

const Delivery = () => {
  const [state, setState] = useState<any>({ quotes: initial })
  const [myItems, setMyItems] = useState<IItem[]>([...initial])

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  function onDragEnd(result: any) {
    if (!result.destination) {
      return
    }
    if (result.destination.index === result.source.index) {
      return
    }
    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    )
    setState({ quotes })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        <div className={styles.wripperMyList}>
          <h2 className={styles.title}>My delivery-list</h2>
          <Droppable droppableId="myList">
            {provided => (
              <ul
                className={styles.myList}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {myItems &&
                  myItems.map((item, index) => (
                    <Draggable draggableId={item.id} index={index} key={index}>
                      {(provided, snapshot) => (
                        <Item
                          item={item}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}
              </ul>
            )}
          </Droppable>
        </div>

        <div className={styles.wripper}>
          <ul className={styles.remuvebleList}>
            <h2 className={styles.title}>Food-list</h2>
            {myItems && myItems.map(item => <Item item={item} />)}
          </ul>

          <ul className={styles.constantList}>
            <h2 className={styles.title}>Food-list-infinity</h2>
            {myItems && myItems.map(item => <Item item={item} />)}
          </ul>
        </div>
      </div>
    </DragDropContext>
  )
}

export default Delivery
