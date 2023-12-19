import { useState, useRef } from "react";
function App() {
    const [info, setInfo] = useState({
        id: "merrybmc",
        password: "merrybmc123",
    });
    const [signUp, setSignUp] = useState(false);

    const changeInfo = (e) => {
        // switch (e.target.name) {
        //     case "id":
        //         setInfo({ ...info, id: e.target.value });
        //         break;
        //     case "password":
        //         setInfo({ ...info, password: e.target.value });
        //         break;
        // }
        console.log(info);
        const { value, name } = e.target;
        setInfo({ ...info, [name]: value });
    };
    const ref = useRef(0);
    const focusRef = useRef();
    const changeAccName = (e) => {
        ref.current = e.target.value;
    };
    console.log(ref.current);

    const checkRef = () => {
        ref.current === "jiyunee"
            ? alert("회원가입완료")
            : focusRef.current.focus();
    };

    return (
        <div>
            <input name="id" onChange={(e) => changeInfo(e)} />
            <br />
            <input name="password" onChange={(e) => changeInfo(e)} />
            <br />
            <input
                ref={focusRef}
                name="accountname"
                onChange={(e) => changeAccName(e)}
            />
            <br />
            <button onClick={checkRef}>회원가입이지롱</button>
        </div>
    );
}
export default App;
