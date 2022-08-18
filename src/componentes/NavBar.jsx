import React from 'react';
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate()
    return (
        <div>
            <nav className='navBar'>
                <i className="fa-solid fa-house" onClick={()=>navigate('/')}></i>
                <i className="fa-solid fa-screwdriver-wrench" onClick={()=>navigate('/habilidades')}></i>
                <i className="fa-solid fa-briefcase" onClick={()=>navigate('/portafolio')}></i>
                <i className="fa-solid fa-id-card" onClick={()=>navigate('/contacto')}></i>
            </nav>
        </div>
    );
};

export default NavBar;