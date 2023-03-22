import { useState } from "react"
import Cards from "../../componentes/Cards/Cards"
import style from './Contact.module.css'

const Contact = ({ theme, language }) => {

    const [validateName, setValidateName] = useState('')
    const [validateEmail, setValidateEmail] = useState('')
    const [validateMsj, setValidateMsj] = useState('')

    return (
        <div className="main">
            <h1>{language.Page[5]}</h1>
            <form
                className="container"
                style={{
                    background: theme ? '#ffffff' : '#52bd89',
                    padding: '30px'
                }}
            >
                <div className="icons">
                    {
                        language.Icons.map((icon, index) => (
                            <a href={icon.url} target="_blank" key={index}><i className={icon.icon}></i></a>
                        ))
                    }
                </div>
                <div
                    className={style.input}
                >
                    <input
                        type="text"
                        className={style.textInput}
                        onChange={(e) => setValidateName(e.target.value)}
                        value={validateName}
                    />
                    <i className="fa-solid fa-user"></i>
                    <span
                        className={validateName ? style.spanValited : style.span}
                        style={{ background: theme ? '#ffffff' : '#52bd89' }}
                    >Nombre</span>
                </div>
                <div
                    className={style.input}
                >
                    <input
                        type="text"
                        className={style.textInput}
                        onChange={(e) => setValidateEmail(e.target.value)}
                        value={validateEmail}
                    />
                    <i className="fa-solid fa-envelope"></i>
                    <span
                        className={validateEmail ? style.spanValited : style.span}
                        style={{ background: theme ? '#ffffff' : '#52bd89' }}
                    >Correo</span>
                </div>
                <div
                    className={style.input}
                    onChange={(e) => setValidateMsj(e.target.value)}
                    value={validateMsj}
                >
                    <textarea
                        className={style.textInput}
                    ></textarea>
                    <span
                        className={validateMsj ? style.spanValited : style.span}
                        style={{ background: theme ? '#ffffff' : '#52bd89' }}
                    >Mensaje</span>
                </div>
                <button className="btnHome">Enviar</button>
            </form>
        </div>
    )
}

export default Contact