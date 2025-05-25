import { Link, Route, Routes, useNavigate, Navigate } from 'react-router';
import { useState, useEffect } from 'react';
import ContactsPage from './components/ContactsPage.jsx';
import AddContactPage from './components/AddContactPage.jsx';
import MainPage from './components/MainPage.jsx';
import { LanguageContext } from './contexts/LanguageContext.js';
import Footer from './components/Footer.jsx';
import { languages } from "./languages.js";
import './App.css';
import { ThemeContext } from './contexts/ThemeContext.js';
import LoginPage from './components/LoginPage.jsx';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();
  const [language, setLanguage] = useState('EN');
  const [theme, setTheme] = useState('dark');

  const translations = languages[language];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleDeleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  }

  const handleAddContact = (newContact) => {
    setContacts(prev => [...prev, newContact]);
    navigate('/contacts');
  };

  useEffect(() => {
    const requestData = async () => {
      const response = await fetch('data.json');
      const result = await response.json();

      setContacts(result);
    }

    requestData();
  }, []);

  return (
    <ThemeContext.Provider value={{ value: theme, change: setTheme }}>
      <LanguageContext.Provider value={{ value: language, change: setLanguage }}>
        <header>
          <Link to="/">{translations.MAIN_PAGE}</Link>
          <Link to="/contacts">{translations.CONTACTS_PAGE}</Link>
          <Link to="/add-contact">{translations.ADD_CONTACT}</Link>
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage onLogin={setIsAuth} />} />
          {isAuth ? (
            <>
              <Route path="/contacts" element={<ContactsPage contacts={contacts} onDelete={handleDeleteContact} />} />
              <Route path="/add-contact" element={<AddContactPage onSave={handleAddContact} />} />
            </>
          ) : (
            <>
              <Route path="/contacts" element={<Navigate to="/login" />} />
              <Route path="/add-contact" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
        <Footer />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
