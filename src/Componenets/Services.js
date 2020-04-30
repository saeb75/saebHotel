import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services : [
            {
                icon:<FaCocktail />,
                title:'free cocktails',
                info:
                    'Et deserunt excepteur adipisicing exercitation et voluptate do tempor velit  occaecat reprehenderit ipsum aute labore.'
            },
            {
                icon:<FaHiking />,
                title:'free cocktails',
                info:
                    'Et deserunt excepteur adipisicing exercitation et voluptate do tempor velit  occaecat reprehenderit ipsum aute labore.'
            },
            {
                icon:<FaShuttleVan />,
                title:'free cocktails',
                info:
                    'Et deserunt excepteur adipisicing exercitation et voluptate do tempor velit  occaecat reprehenderit ipsum aute labore.'
            },
            {
                icon:<FaBeer />,
                title:'free cocktails',
                info:
                    'Et deserunt excepteur adipisicing exercitation et voluptate do tempor velit  occaecat reprehenderit ipsum aute labore.'
            }
        ]

    }
    render() {
        return (
            <div className="services">
                <Title title='services' />
                <div className="services-center">
                    {
                        this.state.services.map((item,index) =>{
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article> 
                            
                        })
                    }

                </div>
                
            </div>
        )
    }
}
