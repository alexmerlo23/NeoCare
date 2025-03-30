import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="neocare-header">
            <div className="header-content">
                <div className="neocare-title">Neuroprotective Internvention Evaluation</div>
                <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </div>
                {isMenuOpen && (
                    <nav className="dropdown-menu">
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/home" onClick={toggleMenu}>Begin Evaluation</Link>
                        <Link to="/landingleftbranch" onClick={toggleMenu}>IVH Info</Link>
                        <Link to="/landingrightbranch" onClick={toggleMenu}>HIE Info</Link>
                    </nav>
                )}
            </div>
        </header>
    );
}