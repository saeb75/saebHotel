import React from 'react'
import Room from './Room'

export default function RoomList({rooms}) {
    
    {if(rooms.length === 0){
        return <div className='empty-search'>
            <h3>unfourtnatly no room matched for you</h3>
        </div>}}
    return (
        <div className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item => {
                        return <Room key={item.id} rooms={item} />
                    })
                }
            </div>
        </div>
    )
}
