import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
                <div style={
                    {
                        display: 'flex',
                        alignItems: 'center'
                    }
                }>
                    <div style={
                        {padding: '15px'}
                    }>Recycle Bin</div><img src="https://i.pinimg.com/originals/55/7c/80/557c804cc776e5438bfc565f1caf7dc3.png" alt="trash"
                        style={
                            {width: '35px'}
                        }/></div>
            </Link>
        </nav>
    )
}

export default Navbar
