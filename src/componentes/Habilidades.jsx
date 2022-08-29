import React from "react";
import css from "../images/css-3.png";
import html from "../images/html-5.png";
import js from "../images/archivo-js.png";
import sql from "../images/servidor-sql.png";
import react from "../images/structure.png";

const Habilidades = () => {
    return (
        <div className="cuerpo">
            <p className="titulo">Formación</p>
            <div className="estudios">
                <span>Educación</span>
                <div>
                    <p>Licenciatura en Computación (2016)</p>
                    <p>Web Full Stack (Actualmente)</p>
                </div>
            </div>
            <div className="divHab">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginLeft: "4rem",
                    }}
                >
                    <span>Habilidades </span>
                    <span>Técnicas</span>
                </div>
                <div className="divIcono">
                    <div className="bgIco">
                        <img src={react} className="react" />
                        <p className="textHabPfirt">
                            React es una biblioteca Javascript de código abierto
                            diseñada para crear interfaces de usuario con el
                            objetivo de facilitar el desarrollo de aplicaciones
                            en una sola página
                        </p>
                    </div>
                    <div className="bgIco">
                        <img src={js} />
                        <p className="textHabPsecu">
                            JavaScript (abreviado comúnmente JS) es un lenguaje
                            de programación interpretado, dialecto del estándar
                            ECMAScript. Se define como orientado a objetos,2​
                            basado en prototipos, imperativo, débilmente tipado
                            y dinámico.
                        </p>
                    </div>
                    <div className="bgIco">
                        <img
                            src={html}
                            style={{ height: "70px", width: "70px" }}
                        />
                        <p className="textHabPter">
                        HTML es el lenguaje con el que se define el contenido de las páginas web. Básicamente se trata de un conjunto de etiquetas que sirven para definir el texto y otros elementos que compondrán una página web, como imágenes, listas, vídeos, etc.
                        </p>
                    </div>
                    <div className="bgIco">
                        <img
                            src={css}
                            style={{ height: "70px", width: "70px" }}
                        />
                        <p className="textHabPfour">
                        CSS son las siglas en inglés de Cascading Style Sheets, que significa «hojas de esilo en cascada». Es un lenguaje que se usa para estilizar elementos escritos en un lenguaje de marcado como HTML. 
                        </p>
                    </div>
                    <div className="bgIco">
                        <img src={sql} />
                        <p className="textHabPfive">
                        SQL es un acrónimo en inglés para Structured Query Language.  Un Lenguaje de Consulta Estructurado. Un tipo de lenguaje de programación que te permite manipular y descargar datos de una base de datos. Tiene capacidad de hacer cálculos avanzados y álgebra.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Habilidades;
