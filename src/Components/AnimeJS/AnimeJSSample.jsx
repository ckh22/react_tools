import React from 'react';
import Anime from 'react-anime';

const AnimeJSSample = () => {
    return (
        <div style={{paddingTop: '15px'}}>
            <Anime easing="easeOutElastic"
                duration={1000}
                direction="alternate"
                loop={true}
                delay={
                    (el, index) => index * 240
                }
                translateX='13rem'
                scale={
                    [.75, .9]
            }>
                <div className="blue" style={{width: '150px', height: '150px', background: 'blue'}}/>
                <div className="green"style={{width: '150px', height: '150px', background: 'green'}}/>
                <div className="red"style={{width: '150px', height: '150px', background: 'red'}}/>
            </Anime>
        </div>

    )
}

export default AnimeJSSample
