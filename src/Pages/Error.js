import React from 'react'
import Hero from './../Componenets/Hero'
import Banner from '../Componenets/Banner'
import {NavLink} from 'react-router-dom'

const Error = () => {
    return (
       <Hero>
            <Banner title="404" subtitle="Page not Found">
                <NavLink to="/" className="btn-primary">Return Home</NavLink>
            </Banner>
       </Hero>
    )
}

export default Error
