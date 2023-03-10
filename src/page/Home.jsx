import foto from '../images/foto.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import folder from '../images/folder.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()
    return (
        <div className="main">
            <h2>Fernando De Laurentis</h2>
            <h1>Desarrollador Jr.</h1>
            <div
                style={{ background: '#ffffff', border: '1px solid #020912', borderRadius: '20px' }}
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
            <h1>Front-End</h1>
            <div
                className='btnHome'
                onClick={() => navigate('/about')}
            >
                <span>Sobre mi</span>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    )
}
export default Home