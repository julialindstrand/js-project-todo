import styled from "styled-components"
import { useTasksStore } from "../stores/tasksStore"

export const CountTasks = () => {

  const active = useTasksStore((s) => s.tasks.filter((t) => !t.done).length)
  const done = useTasksStore((s) => s.tasks.filter((t) => t.done).length)

  return (
    <StyledDiv>
      <h2>Your tasks</h2>
      <CounterContainer>
        <TaskBox><h3>Active: {active}</h3></TaskBox>
        <TaskBox><h3>Done: {done}</h3></TaskBox>
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

