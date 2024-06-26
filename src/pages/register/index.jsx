import './style.css'
import { useContext, useState } from 'react'
import ConfirmationContext from '../../ConfirmationContext'
import Confirmation from './components/confirm'

export default function Register() {
    const { isConfirmed, setIsConfirmed } = useContext(ConfirmationContext);

    const [error, setError] = useState('');
    const [details, setDetails] = useState({
        name: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!details.name.trim()) {
            setError('Enter a valid name');
            return;
        }

        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(details.email)) {
            setError('Enter a valid email address');
            return;
        }

        setError('');
        setIsConfirmed(true);
    };

    return (
        isConfirmed ? <Confirmation /> : (
            <div id='register'>
                <h1>Registration Form</h1>
                <p className='header'>Start your success<br />Journey here!</p>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Enter your name'
                        name='name'
                        value={details.name}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder='Enter your email'
                        name='email'
                        value={details.email}
                        onChange={handleInputChange}
                    />
                    {error && (
                        <div className='error-msg'>
                            <img src='/images/error.svg' alt='Error' />
                            <p>{error}</p>
                        </div>
                    )}
                    <button
                        type='submit'
                        disabled={!details.name.trim() || !details.email.trim()}
                        className={`${!details.name.trim() || !details.email.trim() ? 'disabled' : 'allowed'}`}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    );
}