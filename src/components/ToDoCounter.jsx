// import { useTasksStore } from "../stores/tasksStore"
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

const StyledDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TaskBox = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  padding: 15px;
  width: 45%;
  background-color: ${({ theme }) => theme.colors.cardBg};
`