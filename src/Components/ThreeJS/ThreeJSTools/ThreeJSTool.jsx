import React from 'react'
import {Canvas} from 'react-three-fiber'

const ThreeJSTool = () => {
    return (
        <Canvas style={
            {height: '93vh'}
        }>
            <boxBufferGeometry args={
                [1, 1, 1]
            }/>
            <meshStandardMaterial color={
                hovered ? 'hotpink' : 'orange'
            }/>
        </Canvas>
    )
}

export default ThreeJSTool
