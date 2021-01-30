import React from 'react'
import Particles from 'react-particles-js';

const ParticlesJSSample = () => {
    return (
        <Particles
            height='92vh'
            params={{
                particles: {
                color: {
                    value: "#000000"
                },
                line_linked: {
                    color: {
                        value: "#000000"
                    }
                },
                number: {
                    value: 50
                },
                size: {
                    value: 10
                }
            }
        }}
        />
    )
}

export default ParticlesJSSample
