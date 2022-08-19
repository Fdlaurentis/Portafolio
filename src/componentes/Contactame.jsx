import React from 'react';

const Contactame = () => {
    return (
        <div className='divBlock'>
            <h1>Contactame</h1>
            <form name="contact" netlify>
                <p>
                    <label>Name <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Email <input type="email" name="email" /></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    );
};

export default Contactame;