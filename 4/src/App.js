import React, { useState, useRef, useEffect } from "react";

export default function App() {
    const [button, setButton] = useState(true);
    const lastRef = useRef(0);
    const [todos, setTodos] = useState([
        { id: 0, todo: "새해계획짜기헤헷", done: false },
    ]);
    const [input, setInput] = useState("");
    const [updateInput, setUpdateInput] = useState("");
    const [updateTodo, setUpdateTodo] = useState(null);

    const onChangeInput = (e) => {
        e.target.name === "forUpdate"
            ? setUpdateInput(e.target.value)
            : setInput(e.target.value);
    };
    const addTodos = () => {
        lastRef.current = todos.length;
        setTodos([...todos, { id: lastRef.current, todo: input, done: false }]);
        console.log(todos);
    };
    const changedDone = (id) => {
        if (id === updateTodo) {
            setTodos(
                todos.map((data) => {
                    if (id === data.id) {
                        return { ...data, todo: updateInput };
                    } else {
                        return data;
                    }
                })
            );
            setUpdateTodo(null);
        } else {
            setTodos(
                todos.map((data) => {
                    if (id === data.id) {
                        return { ...data, done: !data.done };
                    } else {
                        return data;
                    }
                })
            );
        }
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((data) => data.id !== id));
    };
    const changeTodo = (id, todo) => {
        if (id === updateTodo) {
            setUpdateTodo(null);
        } else {
            setUpdateTodo(id);
            setUpdateInput(todo);
        }
    };
    useEffect(() => {
        input.length !== 0 ? setButton(false) : setButton(true);
    }, [input]);
    useEffect(() => {
        alert(
            "지윤이의 todolist에 오신 것을 환영합니다~!~!~!~! 반가워~!~!~!~!~!~!~!~!~!~!~!~!~! 진짜루~!~!~!~!~!~!~!~!~!"
        );
    }, []);

    return (
        <div>
            <input value={input} onChange={(e) => onChangeInput(e)} />
            <button onClick={addTodos} disabled={button}>
                추가
            </button>
            <ul>
                {todos.map((data) => (
                    <li key={data.id}>
                        {data.id}&nbsp;
                        {updateTodo === data.id ? (
                            <input
                                name="forUpdate"
                                value={updateInput}
                                onChange={(e) => onChangeInput(e)}
                            />
                        ) : (
                            <span
                                style={{
                                    textDecoration: data.done && "line-through",
                                }}
                            >
                                {data.todo}
                            </span>
                        )}
                        &nbsp;
                        <button onClick={() => changeTodo(data.id, data.todo)}>
                            {updateTodo === data.id ? "취소" : "수정"}
                        </button>
                        &nbsp;
                        <button onClick={() => changedDone(data.id)}>
                            완료
                        </button>
                        &nbsp;
                        <button onClick={() => deleteTodo(data.id)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
