import { Header } from "./components/Header"
import { ToDoInput } from "./components/ToDoInput"
import { CountTasks } from "./components/ToDoCounter"
import { ToDoTasks } from "./components/ToDoTasks"

export const App = () => {
  return (
    <>

      <Header />

      <ToDoInput />

      <CountTasks />

      <ToDoTasks />

    </>
  )
}