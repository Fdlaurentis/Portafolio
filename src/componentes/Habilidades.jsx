import React from 'react';
import css from '../images/css-3.png'
import html from '../images/html-5.png'
import js from '../images/js.png'
import vB from '../images/visual-basico.png'
import sql from '../images/servidor-sql.png'
import react from '../images/structure.png'

const Habilidades = () => {
    return (
        <div>
            <div className="divBlock" id='herramientas'>
                <h4>Habilidates Tecnicas</h4>
                <div className="haTec">
                    <img src={sql} />
                    <img src={html} />
                    <img src={css} />
                    <img src={js} />
                    <img src={react} />
                    <img src={vB} />
                </div>
            </div>
        </div>
    );
};

export default Habilidades;