import React from 'react'
import Card from './Card'

const Cards = ({mascotas}) => {
 
  
  
  const cardsList = mascotas.map((m) =>  <Card mascota={m} key={m.id} />)
 
  return (


    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
             {cardsList}
    </div>
  )
}

export default Cards
