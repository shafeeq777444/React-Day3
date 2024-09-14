import React,{useState} from 'react'

function Counter() {

    const [count,setCount]=useState(0)
    const increment=()=>setCount(count+1)
    const decrement=()=>setCount(count-1)
    const reset=()=>setCount(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>RESET</button>
    </div>
  )
}

export default Counter