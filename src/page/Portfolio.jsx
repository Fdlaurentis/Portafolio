const Portfolio = ({ theme, language }) => {

    return (
        <div className="main">
            <h1>{ language.Page[4] }</h1>
            <div
                className="container"
                style={{
                    background: theme ? '#ffffff' : '#52bd89'
                }}
            >
                <span style={{ fontWeight: 'bloder', textAlign:'center', marginTop:'20px' }}>
                    sorry I'm working on an update
                </span>
                <i className="fa-solid fa-person-digging"></i>
            </div>
        </div>
    )
}

export default Portfolio