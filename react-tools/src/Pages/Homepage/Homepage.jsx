import React from 'react'
import AnimateSample from '../../Components/Animate.css/AnimateSample'
import AnimeJSSample from '../../Components/AnimeJS/AnimeJSSample'
import ChartJSSample from '../../Components/ChartJS/ChartJSSample'
import CleaveJSSample from '../../Components/CleaveJS/CleaveJSSample'
import PixiJSSample from '../../Components/PixiJS/PixiJSSample'
import PopmotionSample from '../../Components/Popmotion/PopmotionSample'
import RevealJSSample from '../../Components/RevealJS/RevealJSSample'
import SweetAlertJSSample from '../../Components/SweetAlertJS/SweetAlertJSSample'
import ThreeJSSample from '../../Components/ThreeJS/ThreeJSSample'
import VideoJSSample from '../../Components/VideoJS/VideoJSSample'
import './scss/Homepage.css'

const Homepage = () => {
    return (
        <div className='flex'>
            <AnimateSample />
            <AnimeJSSample />
            <ChartJSSample />
            <CleaveJSSample />
            <PixiJSSample />
            <PopmotionSample />
            <RevealJSSample />
            <SweetAlertJSSample />
            <ThreeJSSample />
            <VideoJSSample />
        </div>
    )
}

export default Homepage
