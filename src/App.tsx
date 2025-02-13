import './App.css'
import { TodolistItem } from './TodolistItem'

export type Task = {
  id: number
  title: string
  isDone: boolean
}

export const App = () => {

  const task1: Task[] = [
    { id: 1, title: "React", isDone: false },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "Redux", isDone: false }
  ]
  const task2: Task[] = [
    { id: 1, title: "World of WarCraft", isDone: false },
    { id: 2, title: "Half Life 2", isDone: true },
    { id: 3, title: "Dota 2", isDone: true },
    { id: 4, title: "Far Cry", isDone: true }
  ]

  return (
    <>
    <div className="app">
      <TodolistItem title="What to learn" tasks={task1} date={"11.02.2025"}/>
      <TodolistItem title="Games" tasks={task2} />
    </div>
    </>
  )
}

export default App
