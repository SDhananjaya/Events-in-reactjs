import React from 'react'

function Filter() {
    const arr=[10,20,30,40,50,60,70,80,9]
    const Filtered = arr.filter(item=>item>30)
  return (
    <div>
      {
        Filtered.map(item=><li>{item}</li>)
      }
    </div>
  )
}

export default Filter
