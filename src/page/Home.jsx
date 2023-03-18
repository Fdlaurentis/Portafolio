import foto from '../assets/images/foto.png'
import { useNavigate } from 'react-router-dom'

const Home = ({ theme, language }) => {

    const navigate = useNavigate()
    return (        
        <div className="main">
            <h2>Fernando De Laurentis</h2>
            <h1>{language.title}</h1>
            <div
                className='container'
                style={{
                    background: theme ? '#ffffff' : '#52bd89',

                }}
            >
                <img
                    src={foto}
                    className='foto'
                />
                <div className="icons">
                    {
                        language.Icons.map((icon, index) => (
                            <a href={icon.url} target="_blank" key={index}><i className={icon.icon}></i></a>
                        ))
                    }
                </div>
            </div>
            <h1>{language.field}</h1>
            <div
                className='btnHome'
                onClick={() => navigate('/about')}
            >
                <span>{language.Page[1]}</span>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>           
    )
}
export default Home