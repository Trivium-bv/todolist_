import './App.css'
import {TodolistItem} from './TodolistItem'
import {useState} from 'react';

export type Task = {
    id: number
    title: string
    isDone: boolean
}
export type FilterValues = 'all' | 'active' | 'completed'

export const App = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, title: 'React', isDone: false},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'Redux', isDone: false},
        {id: 5, title: 'HTML', isDone: true},
        {id: 6, title: 'CSS', isDone: false},
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

    const deleteTask = (taskId: number) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }
    return (
        <>
            <div className="app">
                <TodolistItem title="What to learn" tasks={tasks} date={'11.02.2025'} deleteTask={deleteTask}
                              changeFilter={changeFilter}/>
            </div>
        </>
    )
}