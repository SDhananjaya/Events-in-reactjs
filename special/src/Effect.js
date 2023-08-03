import React, { useState,useEffect } from 'react'

function Effect() {
    const[dhana,setdhana]=useState(0)
    useEffect(()=>console.log(dhana),[dhana])
  return (
    <div>
      <p>Hello my Role no:{dhana}</p>
      <button onClick={()=>setdhana(dhana+1)}>+</button>
      <button onClick={()=>setdhana(dhana-1)}>-</button>

    </div>
  )
}

export default Effect
