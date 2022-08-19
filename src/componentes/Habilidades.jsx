import React from 'react';
import css from '../images/css-3.png'
import html from '../images/html-5.png'
import js from '../images/js.png'
import sql from '../images/servidor-sql.png'
import react from '../images/structure.png'
import { Card } from 'react-bootstrap'

const Habilidades = () => {
    return (
        <div className='container'>
            <h1>Habilidates Tecnicas</h1>
            <div className="divHabi">
                <Card style={{ background: '#04076d', width: '2in' }} className='cardHab'>
                    <Card.Img variant="top" src={react} style={{ width: '80px' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}><h6>React</h6></Card.Title>
                        <div className="contCard">
                            <Card.Text style={{ color: '#f2d43e' }}>
                                Redux Axios Hook-DOM Componentes
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ background: '#04076d', width: '2in' }} className='cardHab'>
                    <Card.Img variant="top" src={js} style={{ width: '80px' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}><h6>JavaScritp</h6></Card.Title>
                        <div className="contCard">
                            <Card.Text style={{ color: '#f2d43e' }}>
                                Closures Destructuring sintaxis extendida Parámetros rest Callback Functions Promesas Async Await
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ background: '#04076d', width: '2in' }} className='cardHab'>
                    <Card.Img variant="top" src={html} style={{ width: '80px' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}><h6>HTML</h6></Card.Title>
                        <div className="contCard">
                            <Card.Text style={{ color: '#f2d43e' }}>
                                Atributos requerido Atributos opcionales Atributos globales
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ background: '#04076d', width: '2in' }} className='cardHab'>
                    <Card.Img variant="top" src={css} style={{ width: '80px' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}><h6>HTML</h6></Card.Title>
                        <div className="contCard">
                            <Card.Text style={{ color: '#f2d43e' }}>
                                Atributos requerido Atributos opcionales Atributos globales
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ background: '#04076d', width: '2in' }} className='cardHab'>
                    <Card.Img variant="top" src={sql} style={{ width: '80px' }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}><h6>HTML</h6></Card.Title>
                        <div className="contCard">
                            <Card.Text style={{ color: '#f2d43e' }}>
                                Desde consultas hasta estructura de BD
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Habilidades;