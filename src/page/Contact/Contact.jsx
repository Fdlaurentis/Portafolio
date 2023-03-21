import Cards from "../../componentes/Cards/Cards"
import style from './Contact.module.css'

const Contact = ({ theme, language }) => {

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
                    <input type="text" className={style.textInput}/>
                    <i className="fa-solid fa-user"></i>
                    <span
                        className={style.span}
                        style={{ background: theme ? '#ffffff' : '#52bd89' }}
                    >Nombre</span>
                </div>
                <div
                    className={style.input}
                >
                    <input type="text" className={style.textInput}/>
                    <i className="fa-solid fa-envelope"></i>
                    <span
                        className={style.span}
                        style={{ background: theme ? '#ffffff' : '#52bd89' }}
                    >Correo</span>
                </div>
                <div
                    className={style.input}
                >
                    <textarea className={style.textInput}></textarea>
                    <span
                        className={style.span}
                        style={{ background: theme ? '#ffffff' : '#52bd89' }}
                    >Mensaje</span>
                </div>
                <button className="btnHome">Enviar</button>
            </form>
        </div>
    )
}

export default Contact