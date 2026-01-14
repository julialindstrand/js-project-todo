import { Header } from "./components/Header"
import { ToDoInput } from "./components/ToDoInput"
import { ToDoCounter } from "./components/ToDoCounter"
import { ToDoTasks } from "./components/ToDoTasks"
import styled from "styled-components"

export const App = () => {
  return (
    <AppWrapp>

      <Header />

      <ToDoInput />

      <ToDoCounter />

      {/* <CounterComponent /> */}

      <ToDoTasks />

    </AppWrapp>
  )
}


const AppWrapp = styled.main`
  width: 75%;
  max-width: 1200px;
  min-width: 320px;
`