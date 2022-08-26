import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import emailjs from 'emailjs-com'
import pdf from '../pdf/CV-Desarrollador Junior.pdf'

const Contactame = () => {
    const navigate=useNavigate()

    function sendEmail(e){
      e.preventDefault()
      emailjs.sendForm(
        'service_gt2gr6j',
        'template_zabkia9', 
        e.target,
        'vKIqYOv5eb5_QqgK5',
        'caD-3rmi1NlpW3jl_Vl-a'
        ).then(res=>{
          console.log(res);
        }).catch(err=>{console.log(err);})
      swal({
        title:'Correo enviado',
        icon:'success'
      })
      navigate('/')
    }

  return (
    <div className="container">
      <h1>Contactame</h1>
      <div className='botones btn-contact'>
                            <a href="https://github.com/Fdlaurentis" target='_blank'><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/fernando-de-laurentis-776867174/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                            <a href={pdf} download><i className="fa-solid fa-download"></i></a>
                        </div>
      <form action="https://formsubmit.co/9b00cc1265535c9bd393bc7d3378483d" method="POST" onSubmit={sendEmail}>
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
        <label>
          Mensaje    
        </label>       
        <div>
          <textarea
            name="message"
            style={{ width: "273.2px", height: "150px" }}
          ></textarea>
        </div>
        <div>
          <input type="submit" value='Enviar'/>
        </div>                 
      </form>
      
    </div>
  );
};

export default Contactame;
