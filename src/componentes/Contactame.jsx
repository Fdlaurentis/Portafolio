import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Contactame = () => {
    const navigate=useNavigate()

    const message=(e)=>{
      e.preventDefault()
      swal({
        title:'Correo enviado',
        icon:'success'
      })
      navigate('/')
    }

  return (
    <div className="container">
      <h1>Contactame</h1>
      <form action="https://formsubmit.co/9b00cc1265535c9bd393bc7d3378483d" method="POST" onSubmit={message}>
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
          <input type="submit" value='Enviar'/>
        </div>         
        <input type="hidden" name='_captcha' value='false'/>
        {/* <input type="hidden" name='_next' value={'https://fdlaurentis.netlify.app'}/> */}
      </form>
      
    </div>
  );
};

export default Contactame;
