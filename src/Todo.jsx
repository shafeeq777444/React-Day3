import React, { useState } from 'react'

function Todo() {
    const [task,setTask]=useState([]);
    const [newTask,setNewTask]=useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){}
    function deleteTask(){}
    function moveTaskUp(){}
    function moveTaskDown(){}
  return (
    <div>
      <h1>To-Do-List</h1>
      <h2>lists</h2>
      <input type="text" 
      placeholder='Enter any Task...'
      onChange={handleInputChange} /* in first value attribute and after onChange also worked but i loved this order */
      value={newTask}/>
    </div>
  )
}

export default Todo
