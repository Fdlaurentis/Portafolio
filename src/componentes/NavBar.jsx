import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navBar">
                <div className="divNav">
                    <i
                        className="fa-solid fa-house"
                        onClick={() => navigate("/")}
                    ></i>
                    <span className="spanNav">Home</span>
                </div>
                <div className="divNav">
                    <i
                        className="fa-solid fa-screwdriver-wrench"
                        onClick={() => navigate("/habilidades")}
                    ></i>
                    <span className="spanNav">Habilidades</span>
                </div>
                <div className="divNav">
                    <i
                        className="fa-solid fa-briefcase"
                        onClick={() => navigate("/portafolio")}
                    ></i>
                    <span className="spanNav">Portafolio</span>
                </div>
                <div className="divNav">
                    <i
                        className="fa-solid fa-id-card"
                        onClick={() => navigate("/contacto")}
                    ></i>
                    <span className="spanNav">Contactame</span>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
