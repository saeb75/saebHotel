import React, { Component } from 'react'
import {RoomContext} from '../Context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'
export default class FeaturedRooms extends Component {
    static contextType =RoomContext
    render() {
        const {featuredRooms,rooms,loading}=this.context
        let myrooms = featuredRooms.map(item =>{
           return <Room key={item.id} rooms ={item} />
        })
        return (
                 <div className="featured-rooms">
                <Title title='featured rooms' />
                <div className='featured-rooms-center'>
                {loading?
                <Loading />
                :myrooms
                }
                </div>
            </div>
        )
    }
}
