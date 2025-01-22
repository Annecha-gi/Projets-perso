import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li>
                        <a id="about" href="#about">A propos de moi</a>
                    </li>
                    <li>
                        <a id="Mes projets" href="#projectSlider">Mes projets</a>
                    </li>
                    <li>
                        <a id="skills" href="#skills">Mes skills</a>
                    </li>
                    <li>
                        <a id="doublebox" href="#doublebox">Mon parcours</a>
                    </li>
                    <li>
                        <a id="footer" href="#footer">Contactez-moi</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
