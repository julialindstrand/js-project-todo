import { create } from "zustand"

export const useTasksStore = create((set, get) => ({
    tasks: [
        // { id: 1, text: "Make this project", done: false },
        // { id: 2, text: "Have fun", done: false }
    ],

    addTask: (newTask) => {
        const taskListLength = get().tasks.length

        const taskToAdd = {
            ...newTask,
            id: taskListLength + 1, done: false
        }

        return set((state) => ({
            tasks: [...state.tasks, taskToAdd],
        }))
    },

    removeTask: (taskToRemove) => {

        return set((state) => {
            const newTasks = state.tasks.filter((t) => t.id !== taskToRemove.id);

            return {
                tasks: newTasks,
            };
        });
    },

    toggleTask: (taskToToggle) =>

        set((state) => ({
            tasks: state.tasks.map((t) =>
                t.id === taskToToggle.id ? { ...t, done: !t.done } : t
            ),
        })),
}))