
import { useState } from 'react'

export const Header = () => {

    const [ darkMode, setDarkMode ] = useState(false)

    const handleClick = () => {
        setDarkMode( !darkMode )

    }

    return (
        <div className="Header">
            <h1>React Hooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'DarkMode' : 'lightMode'}</button>
            <button type="button" onClick={()=> setDarkMode(!darkMode ) }>{darkMode ? 'DarkMode2' : 'lightMode2'}</button>

        </div>
    )
}

export default Header
