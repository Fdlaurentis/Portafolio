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
                </div>
                <div className="imgIcono">
                    <img src={ configuraciones } onClick={()=>navigate('/habilidades')}/>
                </div>
                <div className="imgIcono">
                    <img src={ portafolio } onClick={()=>navigate('/portafolio')}/>
                </div>
                <div className="imgIcono">
                    <img src={ correo } onClick={()=>navigate('/contacto')}/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
