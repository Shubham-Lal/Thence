import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id='home-nav'>
            <img
                src='/logo-dark.svg'
                alt='Logo'
                className='logo'
            />
            <div className='nav-btns'>
                <Link to='/register'>Get Projects</Link>
                <button>Onboard Talent</button>
            </div>
        </nav>
    )
}

export default Navbar