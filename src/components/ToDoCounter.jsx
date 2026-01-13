// import { useStore } from "../stores/ToDoListStore"
import styled from "styled-components"

export const ToDoCounter = () => {

  return (
    <>
      <div>Your tasks</div>
      <CounterContainer>
        <div>Active: </div>
        <div>Done: </div>
      </CounterContainer>
    </>
  )
}

export const CounterComponent = () => {
  const { count, increment } = useStore()

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`