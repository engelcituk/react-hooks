
import { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = () => {

    const [ darkMode, setDarkMode ] = useState(false)
    const color = useContext(ThemeContext)

    const handleClick = () => {
        setDarkMode( !darkMode )

    }

    return (
        <div className="Header">
            <h1 style={{color}}>React Hooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'DarkMode' : 'lightMode'}</button>
            {/* <button type="button" onClick={()=> setDarkMode(!darkMode ) }>{darkMode ? 'DarkMode2' : 'lightMode2'}</button> */}

        </div>
    )
}

export default Header
