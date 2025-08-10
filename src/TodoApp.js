import {useState} from "react"

function TodoApp(){
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    function addTask () {
        if (input.trim() === '') return;

        const newTask = {
            id: Date.now(),
            text: input
        };
        setTasks([... tasks, newTask]);
        setInput('');
    }
        
    function deleteTask (id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

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
                        <li key={task.id}>
                            {task.text}
                            <button onClick={() => deleteTask(task.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
        </div>
     );
}

export default TodoApp;