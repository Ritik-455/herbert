import React from 'react'
import Team from '../home/Team'
import HerbertHero from '../home/HerbertHero'
import Features from '../home/Features'
import Plans from '../home/Plans'
import Faq from '../home/Faq'


const Home = () => {
    return (
        <>
            <HerbertHero />
            <Features />
            <Plans />
            <Team />
            <Faq />
        </>
    )
}

export default Home