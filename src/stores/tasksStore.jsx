import { create } from "zustand"

export const useTasksStore = create((set, get) => ({
    tasks: [
        { id: 1, text: "Make this project" },
        { id: 2, text: "Have fun" }
    ],

    // isActive: true,

    addTask: (newTask) => {
        const taskListLength = get().tasks.length

        const taskToAdd = {
            ...newTask,
            id: taskListLength + 1,
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

    // toggleTask: () => set{(state) => ({ isActive: !state.isActive })}





    //         set(state => ({ tasks: [...state.tasks, { text, completed: false, index: Date.now() }] })),
    //             removeTask: (index) => set(state => {
    //                 const newTasks = [...state.tasks]
    //                 newTasks.splice(index, 1)
    //             }),
    //                 // return { tasks: newTasks }
    //                 toggleTodo: (index) => set((state) => ({ tasks: state.tasks.map(t => t.index === index ? { ...t, completed: !t.completed } : t) })),
}))