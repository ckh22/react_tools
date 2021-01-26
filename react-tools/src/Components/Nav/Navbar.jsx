import React from 'react'
import {Link} from 'react-router-dom'

const navLinks = ['Animate.css', 'AnimeJS', 'ChartJS', 'CleaveJS', 'PixiJS', 'Popmotion', 'RevealJS', 'SweetAlertJS', 'ThreeJS', 'VideoJS']

const Navbar = () => {
    return (
        <nav>
            <ul>
                {navLinks.map((navLink) => (
                    <Link to={`${navLink}`} className='nav-links'>
                        {navLink}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
