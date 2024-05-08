import './style.css'
import { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import ConfirmationContext from '../../ConfirmationContext';

const Navbar = () => {
    const location = useLocation();
    const { isConfirmed } = useContext(ConfirmationContext);

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
            ) : location.pathname === '/register' && !isConfirmed &&  (
                <Link to='/' className='close-btn'>
                    <img src='/images/close.svg' alt='Add' />
                </Link>
            )}
        </nav>
    )
}

export default Navbar