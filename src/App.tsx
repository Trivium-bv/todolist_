import './App.css'
import { TodolistItem } from './TodolistItem'

export const App = () => {
  return (
      <div className="app">
        <TodolistItem title="What to learn"/>
        <TodolistItem title="Songs"/>
        <TodolistItem title="Games"/>
        <TodolistItem title="Films"/>
      </div>
  )
}

export default App
