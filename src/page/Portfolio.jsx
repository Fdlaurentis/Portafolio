const Portfolio = ({ theme }) => {

    return (
        <div className="main">
            <h1>Portafolio</h1>
            <div
                className="container"
                style={{
                    background: theme ? '#ffffff' : '#52bd89'
                }}
            >
                <span style={{ fontWeight: 'bloder' }}>
                    sorry I'm working on an update
                </span>
                <i class="fa-solid fa-person-digging"></i>
            </div>
        </div>
    )
}

export default Portfolio