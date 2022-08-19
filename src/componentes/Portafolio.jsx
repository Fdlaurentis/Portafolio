import React from 'react';
import ecommerce from '../images/ecommerce.png'
import rickAndMorty from '../images/rickAndMorty.png'
import crud from '../images/crud.png'
import css from '../images/css-3.png'
import html from '../images/html-5.png'
import react from '../images/structure.png'
import pokeApi from '../images/pokeApi.png'
import { Card } from 'react-bootstrap'

const Portafolio = () => {
    return (
        <div className="container">
            <h1>Portafolio</h1>
            <div className="divHabi">

                <Card style={{ width: '18rem', background: '#04076d' }} className='card'>
                    <Card.Img variant="top" src={rickAndMorty} style={{ width: '100%' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}><h4>Rick and Morty</h4></Card.Title>
                        <a href="https://rickandmorty-fdlaurentis.netlify.app/" target='_blank'>
                            <div className="contCard">
                                <Card.Text style={{ color: '#f2d43e' }}>
                                    Desarrollado a través del consumo de una API. En entorno
                                    Web. Donde se hacen peticiones GET para consultas.
                                </Card.Text>
                            </div>
                        </a>
                        <div className="imgtec">
                            <img src={css} />
                            <img src={html} />
                            <img src={react} />
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', background: '#04076d' }} className='card'>
                    <Card.Img variant="top" src={crud} style={{ width: '100%' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}><h4>CRUD</h4></Card.Title>
                        <a href="https://crud-fdlaurentis.netlify.app/" target='_blank'>
                            <div className="contCard">
                                <Card.Text style={{ color: '#f2d43e' }}>
                                    Desarrollado a través del consumo de una API. En entorno Web. Donde se realiza un CRUD (Create, Read, Update, Delete), de Usuario
                                </Card.Text>
                            </div>
                        </a>
                        <div className="imgtec">
                            <img src={css} />
                            <img src={html} />
                            <img src={react} />
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', background: '#04076d' }} className='card'>
                    <Card.Img variant="top" src={pokeApi} style={{ width: '100%' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}><h4>Poke-Api</h4></Card.Title>
                        <a href="https://poke-fdlaurentis.netlify.app" target='_blank'>
                            <div className="contCard">
                                <Card.Text style={{ color: '#f2d43e' }}>
                                    Desarrollado a través del consumo de una API. En entorno
                                    Web. Donde se hacen peticiones GET para consultas.
                                </Card.Text>
                            </div>
                        </a>
                        <div className="imgtec">
                            <img src={css} />
                            <img src={html} />
                            <img src={react} />
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', background: '#04076d' }} className='card'>
                    <Card.Img variant="top" src={ecommerce} style={{ width: '100%' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}><h4>E-commerce</h4></Card.Title>
                        <a href="https://store-fdlaurentis.netlify.app/" target='_blank'>
                            <div className="contCard">
                                <Card.Text style={{ color: '#f2d43e' }}>
                                    Desarrollado a través del consumo de una API. En entorno
                                    Web. Funcionalidad de carrito de compras, filtrado de
                                    productos por categoría e inicio de sesión, carrusel de
                                    imágenes y responsivo
                                </Card.Text>
                            </div>
                        </a>
                        <div className="imgtec">
                            <img src={css} />
                            <img src={html} />
                            <img src={react} />
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Portafolio;