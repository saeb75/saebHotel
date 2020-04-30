import React from 'react'
import Hero from './../Componenets/Hero'
import Banner from '../Componenets/Banner'
import {NavLink} from 'react-router-dom'
import Services from '../Componenets/Services'
import FeaturedRooms from '../Componenets/FeaturedRooms'

const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="Luxurius Rooms" subtitle="deluxe rooms starting at $299">
              <NavLink to="/rooms" className="btn-primary">Our Rooms</NavLink>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
    )
}

export default Home
