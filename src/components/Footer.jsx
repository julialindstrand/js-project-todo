import styled from "styled-components"

export const Footer = () => {
  return (
    <StyledFooter>ToDoList by Asako & Julia</StyledFooter>
  )
}

const StyledFooter = styled.footer`
position: fixed;
left: 0;
right: 0;
bottom: 0;
height: 44px;
padding: 16px 0;
display: flex;
flex-direction: column;
align-items: center;
`