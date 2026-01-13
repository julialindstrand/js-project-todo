import { Header } from "./components/Header"
import { ToDoInput } from "./components/ToDoInput"
import { ToDoCounter } from "./components/ToDoCounter"
import { ToDoTasks } from "./components/ToDoTasks"

export const App = () => {
  return (
    <>

      <Header />

      <ToDoInput />

      <ToDoCounter />

      {/* <CounterComponent /> */}

      <ToDoTasks />

    </>
  )
}
