import {FilterValues, Task} from './App'
import {Button} from './Button'
import {useState} from 'react';

type Props = {
    title: string
    tasks: Task[]
    date?: string
    deleteTask: (taskId: string) => void
    changeFilter: (filter: FilterValues) => void
    createTask: (taskTitle: string) => void
}

export const TodolistItem = ({title, tasks, date, deleteTask, changeFilter, createTask}: Props) => {
    const [taskTitle, setTaskTitle] = useState('')

    const createTaskHandler = () => {
        createTask(taskTitle)
        setTaskTitle('')
    }
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle}
                       onChange={event => setTaskTitle(event.currentTarget.value)}
                       onKeyDown={event => {
                           if (event.key === 'Enter') {
                               createTaskHandler()
                           }
                       }}/>
                <Button title={'+'} onClick={createTaskHandler}/>
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <Button title={'x'} onClick={() => deleteTask(task.id)}/>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button title={'all'} onClick={() => changeFilter('all')}/>
                <Button title={'active'} onClick={() => changeFilter('active')}/>
                <Button title={'completed'} onClick={() => changeFilter('completed')}/>
            </div>
            <div>{date}</div>
        </div>
    )
}

