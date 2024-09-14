import React,{useState,useEffect} from 'react'

function UseEffects() {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)
    
    useEffect(()=>console.log("always worked"))/* if any varible change or any event occur the user effect inner function will be worked */
    
    useEffect(()=>console.log("worked first only"),[])/* its works only in the initial loading refresh time ,other wise its not worked */

    useEffect(()=>{document.title=`count ${count2}`},[count1])/* count1 variable have any changes the use effect inner function will be worked */

    // count argument is passed into c variable
    const addCount1=()=>setCount1(c=>c+1)
    const addCount2=()=>setCount2(c=>c+1)

    
    return (
    <div>
      <p>Count:{count1}</p>
      <button onClick={addCount1}>useEffect Click1</button>
      <p>Count:{count2}</p>
      <button onClick={addCount2}>useEffect Click2</button>
    </div>
  )
}

export default UseEffects

