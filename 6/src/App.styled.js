import styled from "styled-components";
export const AppBox = styled.div`
    background-color: ${(props) =>
        props.name === "chicken" ? "skyblue" : "black"};
    .jiyun {
        color: red;
    }
`;
