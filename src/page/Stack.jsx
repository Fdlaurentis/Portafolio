

const Stack = ( {theme} ) => {
    
    return (
        <div className="main">
            <h1 style={{ fontSize: '25px' }}>Habilidades Técnicas</h1>
            <div
                className="stack"
                style={{
                    background: theme ? '#ffffff' : '#52bd89'
                }}
            >
                <i className="fa-brands fa-react"></i>
                <i className="fa-brands fa-aws"></i>
                <i className="fa-brands fa-square-js"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3-alt"></i>
            </div>
        </div>
    )
}

export default Stack