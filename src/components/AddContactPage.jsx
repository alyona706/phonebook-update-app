import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import './AddContactPage.css';
import { LanguageContext } from '../contexts/LanguageContext.js';
import { languages } from "../languages.js";

export default function AddContactPage({onSave}) {
    const navigate = useNavigate();
    const language = useContext(LanguageContext);
    const translations = languages[language.value];
    const [form, setForm] = useState({
        id: Date.now(),
        firstName: '',
        lastName: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});

    const validateContactForm = () => {
        const newErrors = {};
        const nameRegex = /^[A-Za-z]{1,10}$/;
        const phoneRegex = /^\+380\d{9}$/;

        if (!nameRegex.test(form.firstName)) {
            newErrors.firstName = 'Enter valid first name';
        }
        if (!nameRegex.test(form.lastName)) {
            newErrors.lastName = 'Enter valid last name';
        }
        if (!phoneRegex.test(form.phone)) {
            newErrors.phone = "Enter valid phone";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateContactForm()) {
            onSave(form);
            navigate('/contacts');
        }
    };

    const handleCancel = () => {
        navigate('/contacts');
    };

    return (
        <div>
            <h3>{translations.ADD_CONTACT}</h3>
            <form className='add-contact-form' onSubmit={handleSubmit}>
                <div>
                    <label>{translations.FIRST_NAME}:</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} placeholder={translations.ENTER_FIRS_NAME} />
                    {errors.firstName && <div className='error'>{errors.firstName}</div>}
                </div>
                <div>
                    <label>{translations.LAST_NAME}:</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} placeholder={translations.ENTER_LAST_NAME} />
                    {errors.lastName && <div className='error'>{errors.lastName}</div>}
                </div>
                <div>
                    <label>{translations.PHONE}:</label>
                    <input type='text' name='phone' value={form.phone} onChange={handleChange} placeholder={translations.ENTER_PHONE} />
                    {errors.phone && <div className='error'>{errors.phone}</div>}
                </div>
                <div className="form-buttons">
                    <button type='submit'>{translations.SAVE}</button>
                    <button type='button' onClick={handleCancel}>{translations.CANCEL}</button>
                </div>
            </form>
        </div>
    )
};
