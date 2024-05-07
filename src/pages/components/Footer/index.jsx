import './style.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='left'>© Talup 2023. All rights reserved</div>
            <div className='right'>
                <Link to='/'>Terms & Conditions</Link>
                <Link to='/'>Privacy Policy</Link>
            </div>
        </footer>
    )
}

export default Footer