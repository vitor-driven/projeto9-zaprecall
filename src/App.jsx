import { useState } from "react";
import InfoBar from "./InfoBar";
import RecallComp from "./RecallComp";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import logo from "./assets/logo.png";

const Mainpage = styled.div`
    background-color: #fb6b6b;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
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
function App() {
    return (
        <Mainpage>
            <ZapLogo>
                <img src={logo} />
                <span>ZapRecall</span>
            </ZapLogo>
            <RecallComp />
            <InfoBar />
        </Mainpage>
    );
}

export default App;
