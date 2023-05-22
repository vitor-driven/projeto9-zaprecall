import { useState } from "react";
import styled from "styled-components";

const Counterbar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 70px;
    background-color: white;
    color: #333333;
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    position: fixed;
    bottom: 0;
    left: 0;
`;

function InfoBar({ questions, answers }) {
    return (
        <Counterbar>
            <span>{`${answers.length}/${questions.length} CONCLUIDOS`}</span>
        </Counterbar>
    );
}

export default InfoBar;
