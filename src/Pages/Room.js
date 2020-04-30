import React from 'react'
import Hero from './../Componenets/Hero'
import Banner from '../Componenets/Banner'
import {NavLink} from 'react-router-dom'
import RoomContainer from '../Componenets/RoomContainer'



const Room = () => {
    return (
        <>
           <Hero hero="roomsHero">
                <Banner title="Ours Rooms">
                    <NavLink to="/" className="btn-primary">Return Home</NavLink>
                </Banner>
           </Hero>
           <RoomContainer />
        </>
       
    )
}

export default Room
