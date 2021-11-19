import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { LiComponent } from '../Item/Styled'
import styles from './styles.module.scss'

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

// Move item from one list to other
const move = (
  source: any,
  destination: any,
  droppableSource: any,
  droppableDestination: any,
  sId: any,
  dId: any
) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  // if (sId === 'droppable2') {
  //   const [removed] = sourceClone
  //   destClone.splice(droppableDestination.index, 0, removed)
  // } else {
  //   const [removed] = sourceClone.splice(droppableSource.index, 1)
  //   destClone.splice(droppableDestination.index, 0, removed)
  // }

  destClone.splice(droppableDestination.index, 0, removed)
  const result: any = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

const MyTwoList = () => {
  const [state, setState] = useState<any>({
    items: [
      { id: '1', content: 'apple' },
      { id: '2', content: 'avocado' },
      { id: '3', content: 'apricot' },
      { id: '4', content: 'pear' },
      { id: '5', content: 'grapefruit' },
    ],
    selected: [
      { id: '10', content: 'apple2' },
      { id: '11', content: 'avocado2' },
      { id: '12', content: 'apricot2' },
      { id: '13', content: 'pear2' },
      { id: '14', content: 'grapefruit2' },
    ],
  })

  // Defining unique ID for multiple lists
  const id2List: any = {
    droppable: 'items',
    droppable2: 'selected',
  }

  const getList = (id: any) => state[id2List[id]]

  const onDragEnd = (result: any) => {
    const { source, destination } = result
    if (!destination) {
      return
    }
    // Sorting in same list
    if (source.droppableId === destination.droppableId) {
      const items: any = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      )

      let formatedState: any = { items }

      if (source.droppableId === 'droppable') {
        formatedState = { items: formatedState.items, selected: state.selected }
      } else {
        formatedState = { items: state.items, selected: formatedState.items }
      }
      setState(formatedState)
    }
    // Interlist movement
    else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination,
        source.droppableId,
        destination.droppableId
      )
      setState({
        items: result.droppable,
        selected: result.droppable2,
      })
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        <div className={styles.wripperMyList}>
          <h2 className={styles.title}>Delivery-list</h2>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                {state.items?.map((item: any, index: any) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <LiComponent
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.content}
                      </LiComponent>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
        <div className={styles.wripper}>
          <Droppable droppableId="droppable2">
            {(provided, snapshot) => (
              <ul
                className={styles.remuvebleList}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className={styles.title}>Food-list</h2>
                {state.selected?.map((item: any, index: any) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <LiComponent
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.content}
                      </LiComponent>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  )
}

export default MyTwoList
