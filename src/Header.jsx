import './Header.css'
import { FiSun, FiMoon } from "react-icons/fi";
import LogoWhite from './assets/logo_white.svg';
import LogoDark from './assets/logo_black.svg';

function Header({toggleTheme, theme}) {
    let themeBtn;
    let logo;
    if (theme == 'dark'){
        themeBtn = <FiSun className="themeBtn" onClick={toggleTheme}/>
        logo = LogoDark;
    } else {
        themeBtn = <FiMoon className="themeBtn" onClick={toggleTheme}/>
        logo = LogoWhite;
    }

    return (
        <header className={theme}>
            <img id="logo" src={logo}></img>
            <div>
                <nav className="poppins">
                    <a href="#about-me">Sobre Mí</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contacto</a>
                </nav>
                {themeBtn}
            </div>
        </header>
    )
}

export default Header