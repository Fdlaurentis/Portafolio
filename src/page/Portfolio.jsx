import Cards from "../componentes/Cards/Cards"

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
                <Cards theme={theme} />
            </div>
        </div>
    )
}

export default Portfolio