import { useState } from "react";
import styled from "styled-components";
import Recall from "./Recall";
import cards from "./Deck";

const RecallList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 25px;
    margin-top: 50px;
`;

let questionsData = cards.map((value) => ({
    ...value,
    tap: false,
    status: "",
}));

function RecallComp() {
    const [questions, setQuestions] = useState(questionsData);
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
        <RecallList>
            {questions.map((card, index) => (
                <Recall
                    key={index}
                    index={index}
                    question={card.question}
                    answer={card.answer}
                    tap={card.tap}
                    tapCard={tapCard}
                    zapCard={zapCard}
                    status={card.status}
                />
            ))}
        </RecallList>
    );
}

export default RecallComp;
