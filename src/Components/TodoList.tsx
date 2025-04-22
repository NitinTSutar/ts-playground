import { useState } from "react";

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}
const TodoList = () => {
    const [Todos, setTodos] = useState<Todo[]>([]);

    const [input, setInput] = useState<string>("");

    const addTodo = (task: string) => {
        const newTodo: Todo = {
            id: Todos.length + 1,
            task,
            completed: false,
        };

        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></input>
            <button onClick={() => (addTodo(input), setInput(""))}>Add Todo</button>

            <ul>
                {Todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task} {todo.completed ? "(Completed)" : ""}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
