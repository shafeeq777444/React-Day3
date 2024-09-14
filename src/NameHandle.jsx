import React,{useState} from 'react'

function NameHandle() {
    const [name,setName]=useState("guest")
    const handleName=(event)=>setName(event.target.value)
    const [quantity,setQuantity]=useState()
    const handleQuantity=(event)=>setQuantity(event.target.value)
    const [textAarea,setTextArea]=useState()
    const handleTextArea=(event)=>setTextArea(event.target.value)
    const [payment,setPayment]=useState("visa")
    const handlePayment=(event)=>setPayment(event.target.value)
    const [radio,setRadio]=useState("wi8")
    const radioPayment=(event)=>setRadio(event.target.value)

  return (
    <div>
      <input value={name} onChange={handleName}/>
      <p>Name:{name}</p>
      <input value={quantity} onChange={handleQuantity} type='number'/>
      <p>Quantity:{quantity}</p>

      <select value={payment} onChange={handlePayment}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="Debit">Debit</option>
      </select>
      <p>Id:{payment}</p>
      <input type="radio" value={"pick up"} name='a' onChange={radioPayment}/>
      <input type="radio" value={"delivery"} name='a' onChange={radioPayment}/>
      <><h1>shipping:{radio}</h1></>

      <input type="textarea" onChange={handleTextArea}/>
      <p>text:{textAarea}</p>
    </div>
  )
}

export default NameHandle
