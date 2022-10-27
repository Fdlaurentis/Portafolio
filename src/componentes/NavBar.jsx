import React from "react";
import { useNavigate } from "react-router-dom";
import configuraciones from '../images/configuraciones.png'
import correo from '../images/correos-electronicos.png'
import portafolio from '../images/portafolio.png'
import home from '../images/home.png'

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className="navBar">
            <div className="barraTop"></div>
            <div className="barraLateral"></div>
            <div className="iconos">
                <div className="imgIcono">
                    <img src={ home } onClick={()=>navigate('/')}/>
                    <span className="tooltip">Home</span>
                </div>
                <div className="imgIcono">
                    <img src={ configuraciones } onClick={()=>navigate('/habilidades')}/>
                    <span className="tooltip">Habilidades</span>
                </div>
                <div className="imgIcono">
                    <img src={ portafolio } onClick={()=>navigate('/portafolio')}/>
                    <span className="tooltip">Portafolio</span>
                </div>
                <div className="imgIcono">
                    <img src={ correo } onClick={()=>navigate('/contacto')}/>
                    <span className="tooltip">Contactame</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
