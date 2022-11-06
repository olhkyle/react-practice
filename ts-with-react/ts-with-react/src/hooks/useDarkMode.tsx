import { useEffect, useState} from 'react'
type Theme = typeof lightTheme;

const lightTheme = {
    body: '#fcfcfc',
    text: '#363537',
    toggleBackground: '#fcfcfc',
    mainColor: '#e6328d',
    navBar: '#fcfcfc',
  };

const darkTheme = {
    body: '#252424',
    text: '#fcfcfc',
    toggleBackground: '#3b3b3b',
    mainColor: '#fcfcfc',
    navBar: '#303030',
};

export default function useDarkMode(){
    const [theme, setTheme] = useState<Theme>(lightTheme);

    const setMode = (mode: Theme) => {
        mode === lightTheme ?
        window.localStorage.setItem('theme', 'light')
        : window.localStorage.setItem('theme', 'dark');
        setTheme(mode);
    }


    const toggleTheme = () => {
        theme === lightTheme ? setMode(darkTheme) : setMode(lightTheme)
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if(localTheme !== null){
            if(localTheme === 'dark'){
                setTheme(darkTheme);
            } else{
                setTheme(lightTheme)
            }
        }
    }, [])
    return {theme, toggleTheme}
}