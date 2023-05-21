import styled from "styled-components";
import Right from "./assets/icone_certo.png";
import Wrong from "./assets/icone_erro.png";
import Almost from "./assets/icone_quase.png";
import Arrow from "./assets/seta_virar.png";
import Play from "./assets/seta_play.png";

function Recall() {
    return (
        <>
            <img src={Right} alt="" />
            <img src={Wrong} alt="" />
            <img src={Almost} alt="" />
            <img src={Arrow} alt="" />
            <img src={Play} alt="" />
        </>
    );
}

export default Recall;
