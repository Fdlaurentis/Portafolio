const About = ({ theme, language }) => {
    return (
        <div className="main">
            <h1>{language.Page[1]}</h1>
            <p style={{
                textAlign: 'center',
                lineHeight:'30px'
            }}>
                {language.AboutMe}
            </p>
            <h1>{language.Page[2]}</h1>
            <ul style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '2rem',
                padding:'0 35px'
                }} >
                {
                    language.Trainings.map((training, index) => (
                        <li key={index}>{training}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default About