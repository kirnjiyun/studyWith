import React, { useEffect, useState } from "react";

export default function App2() {
    const [input, setInput] = useState("");
    const [pw, setPw] = useState("");
    const [color, setColor] = useState("gray");
    useEffect(() => {
        input.length > 10 && pw.length > 10
            ? setColor("yellow")
            : setColor("gray");
    }, [input, pw]); //pw까먹지말기 키득키득
    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <input
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
            />
            <button style={{ backgroundColor: color }}>로그인</button>
        </div>
    );
}
