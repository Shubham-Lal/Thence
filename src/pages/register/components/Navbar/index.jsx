import './style.css'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav id='register-nav'>
            <img
                src='/images/logo-dark.svg'
                alt='Logo'
                className='logo'
                onClick={() => navigate('/')}
            />
            <Link to='/' className='close-btn'>
                <img src='/images/close.svg' alt='Add' />
            </Link>
        </nav>
    )
}

export default Navbar