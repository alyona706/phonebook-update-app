import { useState } from 'react';
import { useNavigate } from 'react-router';
import './LoginPage.css';

export default function LoginPage({ onLogin }) {
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { username, password } = form;

        if (username === 'admin' && password === 'admin') {
            onLogin(true);
            navigate('/contacts');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <h2 className='title'>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
                <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
                {error && <div className="error">{error}</div>}
                <button type="submit">Login</button>
            </form>
        </>
      );
};
