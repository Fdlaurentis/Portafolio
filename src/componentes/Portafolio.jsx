import React from "react";
import ecommerce from "../images/ecommerce.png";
import rickAndMorty from "../images/rickAndMorty.png";
import crud from "../images/crud.png";
import pokeApi from "../images/pokeApi.png";

const Portafolio = () => {
    return (
        <div className="portafolio">
            <p className="titulo">Portafolio</p>
            <div className="cardItems">
                <a
                    href="https://store-fdlaurentis.netlify.app/"
                    target="_blank"
                >
                    <div className="cardItem">
                        <span className="titCard">E-commerce</span>
                        <img src={ecommerce} />
                        <div className="bgDesarrollo">
                            <p>
                                Desarrollado a través del consumo de una API. En
                                entorno Web. Funcionalidad de carrito de
                                compras, filtrado de productos por categoría e
                                inicio de sesión, carrusel de imágenes y
                                responsivo
                            </p>
                        </div>
                    </div>
                </a>
                <a
                    href="https://rickandmorty-fdlaurentis.netlify.app/"
                    target="_blank"                    
                >
                    <div className="cardItem">
                        <span className="titCard">Rick and Morty</span>
                        <img src={rickAndMorty} />
                        <div className="bgDesarrollo">
                            <p>
                                Desarrollado a través del consumo de una API. En
                                entorno Web. Donde se hacen peticiones GET para
                                consultas.
                            </p>
                        </div>
                    </div>
                </a>
                <a
                    href="https://crud-fdlaurentis.netlify.app/"
                    target="_blank"
                >
                    <div className="cardItem">
                        <span className="titCard">CRUD</span>
                        <img src={crud} />
                        <div className="bgDesarrollo">
                            <p>
                                Desarrollado a través del consumo de una API. En
                                entorno Web. Donde se realiza un CRUD (Create,
                                Read, Update, Delete), de Usuario
                            </p>
                        </div>
                    </div>
                </a>
                <a
                    href="https://poke-fdlaurentis.netlify.app/"
                    target="_blank"
                >
                    <div className="cardItem">
                        <span className="titCard">Poke-Api</span>
                        <img src={pokeApi} />
                        <div className="bgDesarrollo">
                            <p>
                            Desarrollado a través del consumo de una
                                    API. En entorno Web. Donde se hacen
                                    peticiones GET para consultas.
                            </p>
                        </div>
                    </div>
                </a>
            </div>            
        </div>
    );
};

export default Portafolio;
