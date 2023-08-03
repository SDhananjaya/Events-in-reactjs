import React, { useState } from 'react'

const Click = () => {
    const [name,setName] = useState("Dhana")
  return (
    <div>
      <center>
        <h1>{name}</h1>
        <button onClick={()=>setName("Dhananjaya")}>Click</button>
      </center>
    </div>
  )
}

export default Click
