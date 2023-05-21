import { useState } from "react";
import styled from "styled-components";
import Recall from "./Recall";

const RecallList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 25px;
`;

const cards = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão da linguagem JavaScript",
        state: 0,
        open: false,
        turned: false,
        done: false,
    },
    {
        question: "O React é __",
        answer: "Uma biblioteca JavaScript para construção de interfaces",
        state: 0,
        open: false,
        turned: false,
        done: false,
    },
    {
        question: "Componentes devem iniciar com __",
        answer: "Letra maiúscula",
        state: 0,
        open: false,
        turned: false,
        done: false,
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões",
        state: 0,
        open: false,
        turned: false,
        done: false,
    },
    {
        question: "O ReactDOM nos ajuda __",
        answer: "Interagindo com a DOM para colocar componentes React na mesma",
        state: 0,
        open: false,
        turned: false,
        done: false,
    },
    {
        question: "Usamos o npm para __",
        answer: "Gerenciar os pacotes necessários e suas dependências",
        state: 0,
        open: false,
        turned: false,
        done: false,
    },
    {
        question: "Usamos props para __",
        answer: "Passar diferentes informações para componentes",
        state: 0,
        open: false,
        turned: false,
        done: false,
    },
    {
        question: "Usamos estado (state) para __",
        answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        state: 0,
        open: false,
        turned: false,
        done: false,
    },
];

function RecallComp() {
    return <RecallList>{cards.map(Recall)}</RecallList>;
}

export default RecallComp;
