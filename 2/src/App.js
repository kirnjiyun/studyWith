import React, { useState } from "react";

export default function App() {
    const [age, setAge] = useState(20);
    return (
        <div>
            <App3 name={"김지윤"} age={age} />
            <App4 name={"김지윤"} age={age} />
        </div>
    );
}

function App3(props) {
    console.log(props);

    return (
        <>
            <h1>안녕하세요~~!~!~!</h1>
            <div>
                {props.name},{props.age}
            </div>
        </>
    );
}
function App4({ name, age }) {
    return (
        <>
            <h1>안녕히계세요~!~!~!!~~!~!~!헤헤</h1>
            <div>
                {name},{age}
            </div>
            <App5 name={name} />
        </>
    );
}

function App5({ name }) {
    return (
        <>
            <App6 name={name} />
        </>
    );
}

function App6({ name }) {
    return (
        <>
            <div>{name}</div>
        </>
    );
}
