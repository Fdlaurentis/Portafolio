import React from 'react';

const Contactame = () => {
    return (
        <div>
            <div className="divBlock" id='contactame' style={{ marginBottom: '3in' }}>
                <h4>Contactame</h4>
                <div className="formulario">
                    <form>
                        <label htmlFor="email">Email de contacto</label>
                        <input type="email" id='email' />
                        <label htmlFor="empresa">Nombre de la empresa</label>
                        <input type="text" id='empresa' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactame;