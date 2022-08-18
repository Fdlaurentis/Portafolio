import React from 'react';
import fotoPerfil from '../images/foto.png'
import pdf from '../pdf/CV-Desarrollador Junior.pdf'

const Home = () => {
    return (
        <div className='container'>
            <h1>Sobre Mi</h1>
            <div className='datosPersonales'>
                <img src={fotoPerfil} className='fotoPerfil' />
                <div>
                    <h5>Fernando<br />De Laurentis</h5>
                    <h6>Soy <span className='tipeo'>Desarrollador .</span></h6>
                    <div className='botones'>
                        <a href="https://github.com/Fdlaurentis" target='_blank'><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/fernando-de-laurentis-776867174/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        <a href={pdf} download><i className="fa-solid fa-download"></i></a>
                    </div>
                </div>
            </div>
            <span>
                Tengo 31 años de edad apasionado por el mundo de la programación, me encanta estar al día con las nuevas tecnologías que nos permiten desarrollar lo que imaginamos, en el 2016 me gradue como Lic. en Computación egresado de la prestigiosa Universidad del Zulia en Venezuela. Actualmente me desenpeño como Technical Operations Agent en Ecuador, a la par me encuentro realizando un Bootcamp en Academlo de Programación Web Full-Stack.
            </span>
        </div>
    );
};

export default Home;