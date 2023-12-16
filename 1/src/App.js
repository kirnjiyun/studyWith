import React, { useState } from "react";

export default function App() {
    const [todo, setTodo] = useState([{ todo: "발닦고 잠자기" }]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        setTodo([...todo, { todo: inputValue }]);
        setInputValue("");
    };
    const deleteTodo = (index) => {
        const newTodos = todo.filter((data, i) => i !== index);
        setTodo(newTodos);
    };
    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTodo}>추가</button>
            <ul>
                {todo.map((data, index) => (
                    <li key={index}>
                        {data.todo}
                        <button onClick={() => deleteTodo(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
