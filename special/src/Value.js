import React, { useState } from 'react'

const Value = () => {
    const [count,setcount] = useState(0)
  return (
    <div>
      <center>
        <h2>{count}</h2>
        <button onClick={()=> setcount(count+1)}>Click</button>
      </center>
    </div>
  )
}
export default Value


