import { useStore } from "../stores/ToDoListStore"

export const ToDoCounter = () => {

  return (
    <>
      <div>Your tasks</div>
      <div>Active: </div>
      <div>Done: </div>
    </>
  )
}

export const CounterComponent = () => {
  const { count, increment } = useStore()

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}