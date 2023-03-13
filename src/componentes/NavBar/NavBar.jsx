import style from './NavBar.module.css'
import home from '../../assets/images/home.png'
import stack from '../../assets/images/full-stack.png'
import portafolio from '../../assets/images/portafolio.png'
import email from '../../assets/images/email.png'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()
    return (
        <div
            className={style.NavBar}
        >
            <img src={home} onClick={() => navigate('/')} />
            <img src={stack} onClick={() => navigate('/stack')} />
            <img src={portafolio} onClick={() => navigate('/portfolio')} />
            <img src={email} onClick={() => navigate('/contact')} />
        </div>
    )
}

export default NavBar