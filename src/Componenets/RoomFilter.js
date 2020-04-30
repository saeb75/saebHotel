import React,{useContext} from 'react'
import RoomContext from './../Context'
import Title from './Title'

const getUniq = (items,value) => {
    return [... new Set(items.map(item => item[value]))]
}
export default function RoomFilter({rooms}) {
    const Context=useContext(RoomContext)
    const {handleChange,
     type,
    
    minSize,
    maxSize,
    minPrice,
    maxPrice,
    capacity,
    price,
    breakfast,
    pets} = Context
        //get uniq code 
        let types = getUniq(rooms,'type')
        console.log(types)
        //ad all to types list
        types =['all',...types]
        types = types.map((item,index) => {
        return<option value={item} key={index}>{item}</option>
        });
        let people = getUniq(rooms,'capacity')
        people = people.map((item , index)=> {
            return <option key={index} value={item}>{item}</option>
        })
    
        

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className='filter-form'>
                <div className="form-group">
                <label htmlFor="type">room type</label>
                <select
                 name="type"
                 id="type"
                 value={type} 
                 className="form-control" 
                 onChange={handleChange}>
                     {
                    types
                     }
                </select>
                </div>

                    {/* guestes  */ }

                <div className="form-group">
                <label htmlFor="capacity">room capacity</label>
                <select
                 name="capacity"
                 id="capacity"
                 value={capacity} 
                 className="form-control" 
                 onChange={handleChange}>
                     {
                          people
                     }
                </select>
                </div>
                     {/* price */}
                <div className="form-group">
                    <label htmlFor="price">room price {price}</label>
                     <input 
                     type='range'
                      name="price"
                      max={maxPrice}
                      min={minPrice}
                      value={price}
                      onChange={handleChange}
                      className='form-control' />
                </div>

                  {/* size*/}
               
                     <div className="form-group">
                        <label htmlFor="size">room size</label>
                     <div className="size-inputs">
                         <input type='number' id='size' name='minSize' value={minSize} onChange={handleChange} className="size-input" />
                         <input type='number' id='size' name='maxSize' value={maxSize} onChange={handleChange} className="size-input" />
                     </div>
                     </div>
                     {/* check box */}
                     <div className="form-group">
                       <div className='single-extra'>
                           <input type="checkbox" name="breakfast" checked={breakfast} onChange={handleChange} />
                           <label htmlFor="breakfast">breakfast</label>
                           

                       </div>
                       <div className='single-extra'>
                      
                           <input type="checkbox" name='pets' checked={pets} onChange={handleChange}  />
                           <label htmlFor="pets">pets</label>

                       </div>
                     </div>

            </form>
        </section>
    )
}
