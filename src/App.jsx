import styled from "styled-components"

import { Header } from "./components/Header"
import { ToDoInput } from "./components/ToDoInput"
import { CountTasks } from "./components/ToDoCounter"
import { ToDoTasks } from "./components/ToDoTasks"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <>
      <Page>

        <Header />

        <ToDoInput />

        <CountTasks />

        <ToDoTasks />

      </Page>

      <Footer />

    </>
  )
}

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 44px;
`