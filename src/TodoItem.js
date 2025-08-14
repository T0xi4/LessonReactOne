function TodoItem ({task, onDelete}) {
    return (
        <li>
            {task.text}
            <button onClick={() => onDelete(task.id)}>Удалить</button>
        </li>
    );
}

export default TodoItem;