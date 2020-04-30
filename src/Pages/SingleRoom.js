import React ,{Component} from 'react'
import defaultBcg from '../images/room-1.jpeg'
import {NavLink} from 'react-router-dom'
import Banner from '../Componenets/Banner'
import Hero from '../Componenets/Hero'
import {RoomContext} from '../Context'
import StyledHero from '../Componenets/styledHero'

class SingleRoom extends Component  {
    constructor(props){
        super(props);
        this.state = {
            slug :this.props.match.params.slug,
            defaultBcg
        }
        
    }
    

    static contextType =RoomContext
   
    render(){
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)

        if(!room){
            return(
                <div className="error">
                    <h3>no such room could be found... </h3>
                    <NavLink to='/'  className='btn-primary'>go to home</NavLink>
                </div>
            )
        }
        const {myimages,
            name,
            breakfast ,
            description,
            capacity,
            size,
            price,
            extras,
            pets} = room
            const [mainImg,...defaultImg] =myimages
     
    return (
        <div>
            <StyledHero img={mainImg} >
                <Banner title={`${name} room`} >
                    
                    <NavLink to='/rooms' className='btn-primary'>
                        back to rooms
                    </NavLink>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className='single-room-images'>
                    {defaultImg.map((item,index )=> {
                        return <img src={item} key={index} alt={name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                    <h3>Details</h3>
                    <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h5>info</h5>
                        <h6>price : ${price}</h6>
                        <h6>size : ${size} SQFT</h6>
                        <h6>max capacity : {
                            capacity > 1 ? `${capacity} people` : `${capacity} person`
                            }</h6>
                        <h6>{pets?`pets allowed`: 'no pets allowed' }</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index) => {
                        return <li key={index}>- {item}</li>
                    } )}
                </ul>
            </section>
        
        
        </div>
    )
}
}

export default SingleRoom
