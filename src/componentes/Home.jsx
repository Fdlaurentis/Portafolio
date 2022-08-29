import React from "react";
import fotoPerfil from "../images/foto.png";
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import folder from "../images/folder.png"
import pdf from "../pdf/CV-Desarrollador Junior.pdf";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    return (
        <div className="home">
            <span className="nameHome">Fernando De Laurentis</span>
            <div style={{display:'flex', gap:'02rem'}}>
                <h4><span className="tipeo">Desarrollador Jr.  </span></h4> 
                <div className="homeFoto">
                    <img src={fotoPerfil} className='fotoPe'/>
                    <div className="icoContact">
                        <a href="https://github.com/Fdlaurentis" target="_blank">
                            <img src={github}/>
                            <span className="tooltips">GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fernando-de-laurentis-776867174/"
                            target="_blank"
                        >
                            <img src={linkedin}/>
                            <span className="tooltips">Linkedin</span>
                        </a>
                        <a href={pdf} download>
                            <img src={folder}/>
                            <span className="tooltips" style={{width:'90px'}}>Descargar CV</span>                            
                        </a>
                    </div>
                </div>
            </div>
            <button className="acerca" onClick={()=>navigate('/acerca')}>
                <span>Sobre mi <i className="fa-solid fa-arrow-right-long"></i></span>
            </button>
        </div>
    );
};

export default Home;
