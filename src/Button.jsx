import React, { useState } from 'react';

export default function Button({ name }) {


 var handleClick1=()=>console.log("ouch");
 var handleClick2= (name) =>console.log(`${name}`);
 let count=0
 const handleClick3 = (name) => {
  count++
    if (count < 3) {
  
      console.log(`${name} you clicked me ${count + 1} times`);
    } else {
      console.log(`${name}, stop clicking me`);
    }
  };
  
  const handleClick4=(e)=>e.target.textContent="ouch";
  
  return (<div><button onClick={handleClick1}>Click me 1 </button>
    <button onClick={()=>handleClick2("shafeeq")}>Click me 2 </button>
    <button onClick={()=>handleClick3("shafeeq kp")}>Click me 3 </button>
    <button onClick={handleClick4}> click😃</button>
    </div>
    
  );
}
