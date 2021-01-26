import React from 'react'
import './scss/Homepage.css'
import {Link} from 'react-router-dom'


const navLinks = [
    'Animate.css',
    'AnimeJS',
    'ChartJS',
    'CleaveJS',
    'PixiJS',
    'Popmotion',
    'RevealJS',
    'SweetAlertJS',
    'ThreeJS',
    'VideoJS',
    'Handsontable',
    'ParticlesJS',
    'PrismJS',
    'Quill',
    'Slick'
]

const Homepage = () => {
    return (
        <div className='main'>
            <div className="grid">
                {
                navLinks.map((navLink) => (
                    <Link to={
                        `${navLink}`
                    } style={{color: 'black', textDecoration: 'none'}}>
                        {navLink} </Link>
                ))
            }</div>
        </div>
    )
}

export default Homepage
