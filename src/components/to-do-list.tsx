import React, { useState } from 'react'
import './to-do-list.css'

interface Task {
    id: number;
    text: string;
    complete: boolean;
}

const TodoList = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [text, setText] = useState('');

    function addTask() {
        // console.log(`adding ${text} to`);
        // console.log(tasks);
        if(!text){
            return;
        }
        const newTask = {
            id: Date.now(),
            text,
            complete:false
        }
        setTasks(prevTasks => [...prevTasks,newTask]);  
        setText('');
    }

    function handleTaskCompletion(id: number) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, complete: !task.complete } : task
            )
        );
    }

    function handleTaskDelete(id: number) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }

    return (
        <div className='to-do-list-section'>
            <div className="new-task-inp-section">
               <input type="text" value={text} onChange={(event)=>setText(event.target.value)} />
               <button onClick={addTask} >Add</button>
            </div>
            <ul className='tasks-list'>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.complete} onChange={() => handleTaskCompletion(task.id)} />
                        <span style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>{task.text}</span>
                        <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
