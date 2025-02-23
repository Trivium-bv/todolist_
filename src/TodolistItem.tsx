import {FilterValues, Task} from './App'
import {Button} from './Button'

type Props = {
    title: string
    tasks: Task[]
    date?: string
    deleteTask: (taskId: number) => void
    changeFilter: (filter:FilterValues) => void
}

export const TodolistItem = ({title, tasks, date, deleteTask, changeFilter}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'} onClick={() => {}}/>
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
                                <Button title={'x'} onClick={() => deleteTask(task.id)} />
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

