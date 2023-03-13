const Contact = ({ theme, language }) => {
    
    return (
        <div className="main">
            <h1>{language.Page[5]}</h1>
            <div className="icons">
                {
                    language.Icons.map((icon, index) => (
                        <i className={icon} key={index}></i>
                    ))
                }                
            </div>
            <form
                className="container"
                style={{
                    background: theme ? '#ffffff' : '#52bd89'
                }}
            >

                <input type="text" />
                <input type="text" />
                <textarea>

                </textarea>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Contact