import React ,{useContext}from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {RoomContext} from './../Context'
import Loading from './../Componenets/Loading'

export default function RoomContainer() {
    const Apicontext = useContext(RoomContext)                                  
    const {rooms,sortedRooms,loading} = Apicontext


    {if(loading){
        return <Loading/>
    }}

    return (
        <div>
            
            
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms} />
        </div>
    )
}
