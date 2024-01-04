import styled, { css } from "styled-components";

export const AppBox1 = styled.div`
    color: green;
    font-size: ${(props) => (props.count % 2 === 0 ? "18px" : "38px")};
`;
export const AppBox6 = styled.div`
    background-color: ${({ count }) => {
        switch (count) {
            case 0:
                return "yellow";
                break;
            case 1:
                return "azure";
                break;
            case 2:
                return "beige";
                break;
            case 3:
                return "pink";
                break;
            default:
                return "black";
        }
    }};
`;
const AppBox2 = styled.div`
    color: azure;
`;
export const AppBox3 = styled.div`
    color: navy;
`;
export const AppBox4 = styled.div`
    color: violet;
`;
export const AppBox5 = styled.div`
    color: darkkhaki;
`;
export const AppBox7 = styled.div`
    color: darkkhaki;
`;
export const AppBox8 = styled.div`
    color: darkkhaki;
`;
export const AppBox9 = styled.div`
    color: darkkhaki;
`;
export const AppBox10 = styled.div`
    color: black;
`;
export const AppBox11 = styled(AppBox10)`
    background-color: paleturquoise;
`;
const commonStyle = css`
    color: darkslateblue;
    background-color: skyblue;
`;
export const AppBox12 = styled.div`
    ${commonStyle}
    font-size: 54px;

    .jiyunee {
        color: pink;
    }
`;
export const Input = styled.input.attrs((props) => ({
    placeholder: "비밀번호를 입력해!",
    type: props.count % 2 === 0 ? "text" : "password",
}))``;
