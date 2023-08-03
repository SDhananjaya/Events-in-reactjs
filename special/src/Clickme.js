import React, { useState } from 'react'

const Clickme = () => {
    const[dhana,stedhana]=useState(10)
  return (
    <div>
      <h2>{dhana}</h2>
      <button onClick={()=>stedhana(dhana+10)}>Veera</button>
    </div>
  )
}

export default Clickme
