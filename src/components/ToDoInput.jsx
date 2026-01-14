import styled from "styled-components"

export const ToDoInput = () => {
  return (
    <StyledDiv>
      <StyledInput
        type="text"
      // placeholder="Add a new task..."
      />
      <StyledButton>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="5" fill="#3B75FF" />
          <path d="M30.166 14C31.2706 14 32.166 14.8954 32.166 16V27.8887H43.7773C44.8818 27.8888 45.7773 28.7842 45.7773 29.8887C45.7773 30.9932 44.8818 31.8885 43.7773 31.8887H32.166V43.7773C32.1659 44.8818 31.2705 45.7773 30.166 45.7773C29.0617 45.7771 28.1661 44.8817 28.166 43.7773V31.8887H16C14.8954 31.8887 14 30.9932 14 29.8887C14 28.7841 14.8954 27.8887 16 27.8887H28.166V16C28.166 14.8956 29.0616 14.0002 30.166 14Z" fill="white" />
        </svg>
      </StyledButton>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #E3E3E3;
  padding: 5px;
  margin-top: 15px;
  `

const StyledInput = styled.input`
  flex: 1;
  border: none;
  min-height: 60px;
  `

const StyledButton = styled.button`
  border: none;
  `