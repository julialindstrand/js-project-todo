// import { useStore } from "../stores/ToDoListStore"
import styled from "styled-components"

export const ToDoCounter = () => {

  return (
    <StyledDiv>
      <h2>Your tasks</h2>
      <CounterContainer>
        <TaskBox><h3>Active: </h3></TaskBox>
        <TaskBox><h3>Done: </h3></TaskBox>
      </CounterContainer>
    </StyledDiv>
  )
}

// export const CounterComponent = () => {
//   const { count, increment } = useStore()

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

const StyledDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
`

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TaskBox = styled.div`
  border: 2px solid #E3E3E3;
  padding: 15px;
  width: 45%;
  `