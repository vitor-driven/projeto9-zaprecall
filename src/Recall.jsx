import styled from "styled-components";
import { useState } from "react";
import Right from "./assets/icone_certo.png";
import Wrong from "./assets/icone_erro.png";
import Almost from "./assets/icone_quase.png";
import Arrow from "./assets/seta_virar.png";
import Play from "./assets/seta_play.png";

const RecCard = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;
    width: 100%;
    max-width: 300px;
    font-family: "Recursive";
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    padding: 15px;
    .maintext {
        font-weight: 700;
        font-size: 16px;
        color: black;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
    .showqtn {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .button {
        border-radius: 5px;
        height: 38px;
        width: 85px;
        font-family: "Recursive";
        font-size: 12px;
        font-weight: 400;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .answer {
        width: 100%;
    }
    .flipped {
        width: 100%;
        flex-direction: column;
    }
    .forgot {
        background-color: #ff3030;
    }
    .almost {
        background-color: #ff922e;
    }
    .zap {
        background-color: #2fbe34;
    }
`;

function CardQuestion({ question, answer, zapCard, index, tapCard }) {
    const [zap, setZap] = useState(false);

    return (
        <RecCard data-test="flashcard">
            {!zap ? (
                <div className="showqtn">
                    <div data-test="flashcard-text">{question}</div>
                    <div data-test="turn-btn" onClick={() => setZap(true)}>
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            ) : (
                <div className="flipped">
                    <div data-test="flashcard-text" className="answer">
                        {answer}
                    </div>
                    <div className="buttons">
                        <div
                            data-test="no-btn"
                            className="button forgot"
                            onClick={() => {
                                zapCard(index, "wrong");
                                tapCard(index, false, "wrong");
                            }}
                        >
                            Não lembrei
                        </div>
                        <div
                            data-test="partial-btn"
                            className="button almost"
                            onClick={() => {
                                zapCard(index, "nearly");
                                tapCard(index, false, "nearly");
                            }}
                        >
                            Quase não lembrei
                        </div>
                        <div
                            data-test="zap-btn"
                            className="button zap"
                            onClick={() => {
                                zapCard(index, "zapped");
                                tapCard(index, false, "zapped");
                            }}
                        >
                            Zap!
                        </div>
                    </div>
                </div>
            )}
        </RecCard>
    );
}

function Card({ setTapped, index, tapCard, status }) {
    return (
        <RecCard
            data-test="flashcard"
            className={`${status}`}
            onClick={() => {
                if (status) return;
                tapCard(index);
            }}
        >
            <div data-test="flashcard-text">{`Pergunta ${index + 1}`}</div>
            <img data-test="play-btn" src={Play} alt="" />
        </RecCard>
    );
}

function Recall({ index, question, tap, tapCard, answer, zapCard, status }) {
    const [tapped, setTapped] = useState(tap);

    return (
        <>
            {!tap ? (
                <Card
                    setTapped={setTapped}
                    index={index}
                    tapCard={tapCard}
                    status={status}
                />
            ) : (
                <CardQuestion
                    question={question}
                    answer={answer}
                    zapCard={zapCard}
                    index={index}
                    tapCard={tapCard}
                />
            )}
        </>
    );
}
export default Recall;
