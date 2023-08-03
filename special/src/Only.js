import React, { useState } from 'react'

const Only = () => {
    const[veera,setveera]=useState("Veedokkade")
  return (
    <div>
      <h2>{veera}</h2>
      <button onClick={()=>setveera("Veedokkade a film by siddarth")}>Veera</button>
    </div>
  )
}

export default Only
