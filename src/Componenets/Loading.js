import React from 'react'
import LoadingGif from '../images/gif/loading-arrow.gif'

export default function Loading() {
    return (
        <div className='loading'>
            <h4>Loading Room data</h4>
            <img src={LoadingGif} alt="loading.." />
            
        </div>
    )
}
