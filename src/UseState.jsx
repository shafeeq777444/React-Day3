
import React,{useState} from 'react'
function UseState() {
// UseState
    const [name,setName]=useState("guest");
    const updateDom=()=>{
           setName("spongebob")} 


    const [age,sAge]=useState(0);
    const updateAge=()=>{
        sAge(age+1)}
           

    const [boolean,setBoolean]=useState(false)
    const updateboolean=()=>{
        setBoolean(!boolean)
    }
           
  return (
    <div>
   <p>Name:{name}</p>
   <button onClick={updateDom}>set name </button>
   <p>Age:{age}</p>
   <button onClick={updateAge}>increment age</button>
   <p>Is employe:{boolean?"yes":"no"}</p>
   <button onClick={updateboolean}>is employed</button>
    </div>
  )


}

export default UseState
