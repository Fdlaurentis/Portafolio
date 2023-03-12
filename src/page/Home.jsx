import foto from '../assets/images/foto.png'
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import folder from '../assets/images/folder.png'
import { useNavigate } from 'react-router-dom'

const Home = ( {theme, language} ) => {

    const navigate = useNavigate()
    return (
        <div className="main">
            <h2>Fernando De Laurentis</h2>
            <h1>{language.title}</h1>
            <div
                style={{ 
                    background: theme ? '#ffffff' : '#52bd89', 
                    borderRadius: '20px' 
                }}
            >
                <img src={foto} />
                <div className='imgList'>
                    <img src={github} />
                    <img src={linkedin} />
                    <a
                        href="https://drive.google.com/file/d/1DyoeHGZZ0jNDCi_hlxrNP7F8MSB4IpVR/view?usp=share_link"
                        target="_blank"
                    >
                        <img src={folder} />
                    </a>
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