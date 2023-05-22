import { useState } from "react";
import InfoBar from "./InfoBar";
import RecallComp from "./RecallComp";
import cards from "./Deck";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import logo from "./assets/logo.png";

const Mainpage = styled.div`
    background-color: #fb6b6b;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
`;
const ZapLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
    height: 60px;
    gap: 20px;
    img {
        height: 60px;
    }
    span {
        font-family: "Righteous";
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: white;
    }
`;
let cardsData = cards.map((value) => ({
    ...value,
    tap: false,
    status: "",
}));

function App() {
    const [questions, setQuestions] = useState(cardsData);
    const [answers, setAnswers] = useState([]);
    function tapCard(cardIndex, tap = true, status = "") {
        const newQuestions = questions.map((value, index) => {
            if (index === cardIndex) {
                return {
                    ...value,
                    tap: tap,
                    status,
                };
            }
            return {
                ...value,
                tap: false,
            };
        });
        setQuestions([...newQuestions]);
    }

    function zapCard(cardIndex, status) {
        if (answers.some((value) => value.index === cardIndex)) {
            return;
        }
        setAnswers([
            ...answers,
            {
                index: cardIndex,
                status,
            },
        ]);
    }
    return (
        <Mainpage>
            <ZapLogo>
                <img src={logo} />
                <span>ZapRecall</span>
            </ZapLogo>
            <RecallComp zapCard={zapCard} tapCard={tapCard} />
            <InfoBar questions={questions} answers={answers} />
        </Mainpage>
    );
}

export default App;
