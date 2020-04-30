import React, { Component } from 'react'
import items from './data'
import Client from './Contentful'
const  RoomContext =React.createContext()



    


class RoomProvider extends Component {

    state = {

        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        minSize:0,
        maxSize:0,
        minPrice:0,
        maxPrice:0,
        capacity:1,
        price:0,
        breakfast:false,
        pets:false
       
    }

    getData = async() => {
        try {
            let response =await Client.getEntries({
                content_type:'beascResortHorel',
           
                
            });
            
            console.log(response.items)
            console.log(items)
            let rooms = this.formatdata(response.items)
       
        let featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
   
        this.setState({
            rooms:rooms,
            featuredRooms:featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize,
        })

        } catch (error) {
            
        }
    }




    componentDidMount(){
        this.getData()
    }

 
    getRoom = (slug) => {
        let temproom =[...this.state.rooms]
        let room =temproom.find(room => room.slug === slug)
        return room
    }
    formatdata(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(myimage => 
                myimage.fields.file.url)
            let room ={...item.fields,myimages:images,id}
            return room;
                    })
        return tempItems
    }
    
    handleChange = e => {
        const target =e.target
        const value =target.type === 'checkbox'?target.checked:target.value
        const name =e.target.name
     
        
        this.setState({[name]:value},this.filterRoom)
    }
    filterRoom = () => {
       let {
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        type,
        minSize,
        maxSize,
        minPrice,
        maxPrice,
        capacity,
        price,
        breakfast,
        pets
       } = this.state
        capacity = parseInt(capacity)
        price = parseInt(price)
       let temproom = [...rooms]

       
       if(type !== 'all'){
           temproom = temproom.filter(item => item.type===type)
         
       }
       if(capacity !== 1){
        temproom = temproom.filter(item => item.capacity >= capacity)
        console.log(temproom)
         }
          // filter by 
          
        if(price !=600){
            temproom = temproom.filter(item => item.price <= price)
            console.log(temproom)
        }
        if(maxSize !=1000){
            temproom = temproom.filter(item => item.size <= maxSize)
            console.log(temproom)
        }
        if(minSize !=1000){
            temproom = temproom.filter(item => item.size >= minSize)
            console.log(temproom)
        }
        if(pets){
            temproom = temproom.filter(item => item.pets ===true)
            console.log(temproom)
        }
        if(breakfast){
            temproom = temproom.filter(item => item.breakfast ===true)
            console.log(temproom)
        }

       this.setState({
           sortedRooms :temproom
       })
    }    



    render() {
        return (
            <RoomContext.Provider value={{ ...this.state,getRoom:this.getRoom,handleChange:this.handleChange }}>
                {this.props.children}
               
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer
export default RoomContext
export {RoomContext,RoomConsumer,RoomProvider} 