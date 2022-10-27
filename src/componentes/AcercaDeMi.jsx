import React from 'react';
import programador from '../images/programador.png'

const AcercaDeMi = () => {
    return (
        <div className="acercaDeMi">            
            <div className='cuerpo'>
                <span>Sobre mí</span>
                <p>Apasionado por el mundo de la programación, me encanta estar al día con las nuevas tecnologías que nos permiten desarrollar lo que imaginamos. Soy Licenciado en Computación, egresado de la prestigiosa Universidad del Zulia en Venezuela. Actualmente, me desempeño como Technical Operations Agent en Ecuador, y a la par estoy realizando un Bootcamp en Academlo de Programación Web Full-Stack.</p>
                <img src={programador}/>
            </div>
        </div>
    );
};

export default AcercaDeMi;