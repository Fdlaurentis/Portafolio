import React from 'react';
import ecommerce from '../images/ecommerce.png'
import rickAndMorty from '../images/rickAndMorty.png'
import crud from '../images/crud.png'
import { Carousel } from 'react-bootstrap'

const Portafolio = () => {
    return (
        <div>
            <div className="divBlock mx-5">
                    <h4>Portafolio</h4>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ecommerce}
                                alt="First slide"                                
                            />
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={rickAndMorty}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={crud}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
        </div>
    );
};

export default Portafolio;