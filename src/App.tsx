import './App.css'
import {TodolistItem} from './TodolistItem'
import {useState} from 'react';
import {v1} from 'uuid';


export type Task = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValues = 'all' | 'active' | 'completed'

export const App = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: false},
    ])
    const [filter, setFilter] = useState<FilterValues>('all')

    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone)
    }
    const changeFilter = (filter: FilterValues) => {
        setFilter(filter)
    }
    const createTask = (title: string) => {
        const newTask = {id: v1(), title, isDone: false}
        const newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    const deleteTask = (taskId: string) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }
    return (
        <>
            <div className="app">
                <TodolistItem title="What to learn"
                              tasks={filteredTasks}
                              createTask={createTask}
                              deleteTask={deleteTask}
                              changeFilter={changeFilter}/>
            </div>
        </>
    )
}