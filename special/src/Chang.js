import { useState } from "react"

const Chang = () => {
    const[user,setUser] = useState ("");
    const handler = (e)=>{
        setUser (e.target.value)
    }
  return (
    <div>
      <center> 
       
        <input type="text" placeholder='search' value={user}  name="user" onChange={handler}/>
        <br/>
        {user}
      
      </center>
    </div>
  )
}

export default Chang
