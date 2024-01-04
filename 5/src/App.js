import React from "react";
import { useState } from "react";
// import {
//     // AppBox1,
//     // AppBox2,
//     // AppBox3,
//     // AppBox4,
//     // AppBox5,
//     // AppBox6,
//     // AppBox7,
//     // AppBox8,
//     // AppBox9,
//     // AppBox10,
// } from "./App.styled";임포트 지옥인 것이다~~
import * as S from "./App.styled";

export default function App() {
    const [count, setCount] = useState(0);
    const plusOne = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <div>{count}</div>
            <button onClick={plusOne}>클릭</button>
            <S.AppBox1 count={count}>App</S.AppBox1>
            <S.AppBox6 count={count}>히히</S.AppBox6>
            <S.AppBox3>두둥</S.AppBox3>
            <S.AppBox11>시러</S.AppBox11>
            <S.AppBox12>
                <div className="jiyunee">지유니입니다</div>왜따라해?
            </S.AppBox12>
            <S.Input count={count} />
        </div>
    );
}
