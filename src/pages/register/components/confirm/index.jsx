import './style.css';
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ConfirmationContext from '../../../../ConfirmationContext'

const Confirmation = () => {
    const navigate = useNavigate();
    const { setIsConfirmed } = useContext(ConfirmationContext);

    const [countdown, setCountdown] = useState(6);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            setIsConfirmed(false);
            navigate('/');
        }
    }, [countdown, setIsConfirmed, navigate]);

    return (
        <div id='confirm'>
            <img src='/images/success.svg' alt='Success' />
            <h1>Success Submitted</h1>
            <p className='header'>Congratulations</p>
            <span className='message'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</span>
            <p className='footer'>
                {countdown > 1 ? (
                    <>
                        Redirecting you to Homepage in <span>{countdown - 1} {countdown > 2 ? 'seconds' : 'second'}</span>
                    </>
                ) : (
                    'Redirecting you to Homepage'
                )}
            </p>
        </div>
    );
};

export default Confirmation;