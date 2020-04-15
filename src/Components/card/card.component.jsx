import React from 'react'
import '../../Styles/card.style.css'
// import { images } from '../../LocalApi/api'
// import picture from '../../img/1.jpg'

// let pictures = images.map(image => {
//     return <img src={image.img} alt="pic" style={{height:'180px', width:'180px'}} />

// })

export function Card({ preacher }) {
    return (
        <div className='card_container'>
            <img src={`https://robohash.org/${preacher.id}?set=set4&size=180x180`} alt="preacher" />
            {/* <img src={preacher.img} alt="pic" style={{height:'200px', width:'200px', borderRadius: '100px'}} /> */}
            <h2>Name: {preacher.name} </h2>
            <h3>City: {preacher.address.city}</h3>
            <p>Email: {preacher.email}</p>


        </div>
    )
}
