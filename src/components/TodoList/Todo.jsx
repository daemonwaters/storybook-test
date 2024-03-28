import React from 'react'

function Todo({title , id}) {
  return (
    <li>
        {title} number {id}
    </li>
  )
}

export default Todo