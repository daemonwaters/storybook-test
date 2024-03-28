import React from 'react'
import './Input.css'
import Button from '../Button/Button'

function Input() {
  return (
    <div className='input_wrapper'>
        <input type="text" name="todo-input" id="todo-input" placeholder='Add task...' />
        <Button title="Add" variant="add" />
    </div>
  )
}

export default Input