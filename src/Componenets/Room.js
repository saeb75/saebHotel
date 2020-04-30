import React,{useContext} from 'react'
import {Link} from 'react-router-dom'


export default function Room({rooms}) {

    const {myimages,price,id,slug,name} =rooms
    
    return (
        <article className='room'>
            <div className='img-container'>
               <img src={myimages[0]} alt="single room"/> 
               <div className="price-top">
                <h6>${price}</h6>
                <p>per night</p>
               </div>
               <Link to={`/rooms/${slug}`} className="btn-primary  room-link ">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}
