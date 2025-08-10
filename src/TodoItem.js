function TodoItem () {
    return (
        <li>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Удалить</button>

        </li>
    );
}

export default TodoItem;