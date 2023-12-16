import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([
        {
            id: 0,
            todo: "발 닦고 자세요",
            done: true,
        },
    ]);
    const clickButton = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    };
    const changeTodo = () => {
        let changedTodo = [...todo];
        changedTodo[0].todo = "발 씻었어요?";
        setTodo(changedTodo);
        // setTodo([...todo, { ...todo[0], todo: "발씻었어요" }]); 구린방법은 아니래 나중에 투두 추가할때 이렇게 쓰래
        console.log(todo);
    };
    return (
        <div>
            <div>{count}</div>
            <button onClick={clickButton}>+1</button>
            <br />
            <div>{todo[0].todo}</div>
            <button onClick={changeTodo}>발 씻었어요?</button>
            <br />
            <button onClick={(e) => console.log(e)}>버튼이에요</button>
            <input
                placeholder="키득키득키득"
                // value={"하이"}
                onChange={(e) => console.log(e)}
                type="password"
            />
        </div>
    );
}
export default App;
