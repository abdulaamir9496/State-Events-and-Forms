import { createContext, useState} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => 
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};