import React from "react";
import { useNavigate } from "react-router-dom";


const Contactame = () => {
    const navigate=useNavigate()

  return (
    <div className="container">
      <h1>Contactame</h1>
      <form action="https://formsubmit.co/fdlaurentis@gmail.com" method="POST">
        <div>
          <label>
            Name <input type="text" name="name" /> 
          </label>
        </div>
        <div>
          <label>
            Email <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Asunto <input type="text" name="asunto" />
          </label>
        </div>
        <div>
          <textarea
            name="contenido"
            style={{ width: "273.2px", height: "150px" }}
          ></textarea>
        </div>
        <div>
          <input type="submit" value='Enviar' name='_next' onClick={()=>navigate('/')}/>
        </div>         
        <input type="hidden" name='_captcha' value='false'/>
      </form>
      
    </div>
  );
};

export default Contactame;
