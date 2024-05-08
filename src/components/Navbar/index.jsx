import './style.css'
import { useLocation, Link } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();

    return (
        <nav id='navbar' className={`${location.pathname !== '/' ? 'other' : ''}`}>
            <Link to='/'>
                <img
                    src='/images/logo-dark.svg'
                    alt='Logo'
                    className='logo'
                />
            </Link>
            {location.pathname === '/' ? (
                <div className='nav-btns'>
                    <Link to='/register'>Get Projects</Link>
                    <button>Onboard Talent</button>
                </div>
            ) : (
                <Link to='/' className='close-btn'>
                    <img src='/images/close.svg' alt='Add' />
                </Link>
            )}
        </nav>
    )
}

export default Navbar