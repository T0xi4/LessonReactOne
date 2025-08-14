import {useEffect, useState} from "react"
import TodoItem from "./TodoItem";

function TodoApp(){
    const [tasks, setTasks] = useState(() => {
        try{
            const saved = localStorage.getItem('tasks');
            return saved ? JSON.parse(saved) : [];
            }catch {
                return [];
            }
    });
    const [input, setInput] = useState('');

    function addTask () {
        if (input.trim() === '') return;

        const newTask = {
            id: Date.now(),
            text: input
        };
        setTasks([...tasks, newTask]);
        setInput('');
    }
        
    function deleteTask (id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    // useEffect(()=>{
    //     const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    //     if (savedTasks) {
    //         setTasks(savedTasks);
    //     }
    // }, [])

    return ( 
        <div>
            <h2>Мой первый TODO-лист</h2>
            <input 
                type="text"
                value={input}
                placeholder="Введите новую задачу" 
                onChange={(e) => setInput(e.target.value)}/>
                <button onClick={addTask}>Добавить</button>

                <ul>
                    {tasks.map(task => (
                    // <li key={task.id}>
                    //     {task.text}
                    //     <button onClick={() => deleteTask(task.id)}>Удалить</button>
                    // </li>
                    <TodoItem key={task.id} task={task} onDelete={deleteTask}/>
                    ))}
                </ul>
        </div>
     );
}

export default TodoApp; 