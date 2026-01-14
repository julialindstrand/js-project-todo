import { create } from "zustand"

export const useTasksStore = create(set => ({
    tasks: [],

    addTask: (text) => set(state => ({ tasks: [...state.tasks, { text, completed: false, index: Date.now() }] })),
    removeTask: (index) => set(state => {
        const newTasks = [...state.tasks]
        newTasks.splice(index, 1)
    }),
    // return { tasks: newTasks }
    toggleTodo: (index) => set((state) => ({ tasks: state.tasks.map(t => t.index === index ? { ...t, completed: !t.completed } : t) })),
}))