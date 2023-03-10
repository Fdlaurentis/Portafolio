import style from './NavBar.module.css'
import home from '../../images/home.png'
import stack from '../../images/full-stack.png'
import portafolio from '../../images/portafolio.png'
import email from '../../images/email.png'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()
    return (
        <div className={style.NavBar}>
            <img src={home} onClick = { () => navigate('/') }/>
            <img src={stack} onClick = { () => navigate('/stack') }/>
            <img src={portafolio} />
            <img src={email} />
        </div>
    )
}

export default NavBar