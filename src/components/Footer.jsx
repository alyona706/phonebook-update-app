import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext.js";
import { ThemeContext } from "../contexts/ThemeContext.js";

export default function Footer() {
    const language = useContext(LanguageContext);
    const theme = useContext(ThemeContext);

    const onLanguageChange = event => {
        language.change(event.target.value);
    }

    const onThemeChange = event => {
        theme.change(event.target.value);
    }

    return (
        <footer>
          <select value={language.value} onChange={onLanguageChange}>
            <option value="EN">EN</option>
            <option value="UA">UA</option>
          </select>
          <select value={theme.value} onChange={onThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </footer>
      )
};
