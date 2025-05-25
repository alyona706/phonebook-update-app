import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext.js';
import { languages } from "../languages.js";

export default function MainPage() {
    const language = useContext(LanguageContext);
    const translations = languages[language.value];

    return (
        <h1>{translations.TITLE}</h1>
    )
};
