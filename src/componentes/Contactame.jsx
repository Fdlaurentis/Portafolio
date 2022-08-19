import React from 'react';

const Contactame = () => {
    return (
        <div className='divBlock'>
            <h1>Contactame</h1>
            <form className='formulario' name='form-Contact' netlify>
                <label htmlFor="nameEmpresa">Nombre de la Empresa</label>
                <input type="text" id="nameEmpresa" />
                <label htmlFor="nameEmpresa">Email de Empresa</label>
                <input type="email" id="nameEmpresa" />
                <label htmlFor="descEmpresa">Descripción del cargo</label>
                <textarea id="descEmpresa" cols="30" rows="20" style={{height:'150px'}}></textarea>
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Contactame;