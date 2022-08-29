import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import emailjs from "emailjs-com";
import pdf from "../pdf/CV-Desarrollador Junior.pdf";

const Contactame = () => {
    const navigate = useNavigate();

    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_gt2gr6j",
                "template_zabkia9",
                e.target,
                "vKIqYOv5eb5_QqgK5",
                "caD-3rmi1NlpW3jl_Vl-a"
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        swal({
            title: "Correo enviado",
            icon: "success",
        });
        navigate("/");
    }

    return (
        <div className="cuerpo">
            <p className="titulo">Contáctame</p>
            <span style={{ fontSize: "12px",margin:'-20px 5rem' }}>fdlaurentis@gmail.com</span>
            <div className="formContac">
                <form
                    action="https://formsubmit.co/9b00cc1265535c9bd393bc7d3378483d"
                    method="POST"
                    onSubmit={sendEmail}
                >
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea
                            name="message"
                            style={{ width: "275x", height: "150px" }}
                            id="mensaje"
                        ></textarea>
                    </div>
                    <input type="submit" value="Enviar" className="btnForm" />
                </form>
            </div>
        </div>
    );
};

export default Contactame;
