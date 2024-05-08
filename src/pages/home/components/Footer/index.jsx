import './style.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='left'>© Talup 2023. All rights reserved</div>
            <p className='made-by-desktop'>Made with ❤️ by <a href='https://github.com/Shubham-Lal' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'underline' }}>Shubham Lal</a></p>
            <div className='right'>
                <Link to='/'>Terms & Conditions</Link>
                <Link to='/'>Privacy Policy</Link>
            </div>
            <p className='made-by-mobile'>Made with ❤️ by <a href='https://github.com/Shubham-Lal' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'underline' }}>Shubham Lal</a></p>
        </footer>
    )
}

export default Footer