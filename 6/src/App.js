import * as S from "./App.styled";
function App() {
    return (
        <div>
            <App2 name={"jiyun"} />
        </div>
    );
}

function App2({ name }) {
    return (
        <>
            <S.AppBox name="chicken" onClick={(e) => console.log(e)}>
                <input
                    placeholder="엉엉엉엉엉"
                    name="chicken"
                    onChange={(e) => console.log(e)}
                />
                {name}
                <div className="jiyun">지유니짱</div>
            </S.AppBox>
            <div>
                <App3 name={name} />
            </div>
        </>
    );
}

function App3({ name }) {
    return <div>{name}</div>;
}

export default App;
