import { useTasksStore } from '../stores/tasksStore'
import styled from "styled-components"
import { LottieAnime } from './Lottie'

export const ToDoTasks = () => {
  const tasks = useTasksStore((state) => state.tasks);
  const removeTask = useTasksStore((state) => state.removeTask)
  const toggleTask = useTasksStore((state) => state.toggleTask)

  const handleRemoveTask = (taskToRemove) => {
    removeTask(taskToRemove)
  }

  const handleOnTaskChange = (_, task) => {
    toggleTask(task);
  }

  return (
    <>
      {tasks.length === 0 ? (
        <LottieAnime />
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <StyledLi key={index}>
              <StyledSpan>
                <StyledCheckbox
                  type="checkbox"
                  onChange={(e) => handleOnTaskChange(e.target.checked, task)}
                  checked={task.done}
                />
                {task.text}
              </StyledSpan>
              <StyledButton
                onClick={() => handleRemoveTask(task)}
                aria-label="Remove button"
              >
                <img src="/trash-2.png" alt="Remove button" />
              </StyledButton>
            </StyledLi>
          ))}
        </ul >
      )}
    </>
  )
}

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  list-style: none;
  padding: 10px;
  margin-top: 15px;
`

const StyledCheckbox = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  accent-color: ${({ theme }) => theme.colors.iconBlue};
`

const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.cardBg};
`

const StyledSpan = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`