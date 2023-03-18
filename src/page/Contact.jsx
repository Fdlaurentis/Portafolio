import Cards from "../componentes/Cards/Cards"

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
                <input type="text" />
                <input type="text" />
                <textarea>

                </textarea>
                <button>Enviar</button>
            </form>
            <Cards theme={theme} />
        </div>
    )
}

export default Contact