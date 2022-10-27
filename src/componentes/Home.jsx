import React from "react";
import fotoPerfil from "../images/foto.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import folder from "../images/folder.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
            <span className="nameHome">Fernando De Laurentis</span>
            <div style={{ display: "flex", gap: "02rem" }}>
                <h4>
                    <span className="tipeo">Desarrollador Jr. </span>
                </h4>
                {/* <a
                    href="https://drive.google.com/file/d/142RPXUIvS2TAyFDo7FKf8M447IiP3-QU/view?usp=sharing"
                    target="_blank"
                    style={{display: 'flex', flexDirection:'column', textDecoration:'none', position:'absolute', marginTop:'1in', gap:'1rem', marginLeft:'-2in'}}
                >
                    <img src={github} style={{ width: "100px", background:'#ffff', borderRadius:'1rem' }} />
                    <span>GitHub</span>
                </a>
                <a
                    href="https://drive.google.com/file/d/142RPXUIvS2TAyFDo7FKf8M447IiP3-QU/view?usp=sharing"
                    target="_blank"
                    style={{display: 'flex', flexDirection:'column', textDecoration:'none', position:'absolute', marginTop:'1in', gap:'1rem'}}
                >
                    <img src={folder} style={{ width: "100px" }} />
                    <span>Descargar CV</span>
                </a> */}
                
                <div className="homeFoto">
                    <img src={fotoPerfil} className="fotoPe" />
                    <div className="icoContact">
                        <a
                            href="https://github.com/Fdlaurentis"
                            target="_blank"
                        >
                            <img src={github} />
                            <span className="tooltips">GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fernando-de-laurentis-776867174/"
                            target="_blank"
                        >
                            <img src={linkedin} />
                            <span className="tooltips">Linkedin</span>
                        </a>
                        <a
                            href="https://drive.google.com/file/d/142RPXUIvS2TAyFDo7FKf8M447IiP3-QU/view?usp=sharing"
                            target="_blank"
                        >
                            <img src={folder} />
                            <span
                                className="tooltips"
                                style={{ width: "90px" }}
                            >
                                Descargar CV
                            </span>
                        </a>
                    </div>
                </div>                
            </div>
            <button className="acerca" onClick={() => navigate("/acerca")}>
                <span>
                    Sobre mi <i className="fa-solid fa-arrow-right-long"></i>
                </span>
            </button>
        </div>
    );
};

export default Home;
