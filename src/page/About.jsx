const About = () => {
    return (
        <div className="main">
            <h1>Sobre mi</h1>
            <p style={{ textAlign: 'center' }}>
                Apasionado por el mundo de la programación, me encanta estar al día con las nuevas tecnologías que nos permiten desarrollar lo que imaginamos.

            </p>
            <h1>Formación</h1>
            <ul style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
                <li>Lic. en Computación  Universidad del Zulia(2016)</li>
                <li>Web Full Stack - Academlo (2022)</li>
                <li>PHP 8, MYSQL,  Bootstrap - Udemy 2021</li>
            </ul>
        </div>
    )
}

export default About