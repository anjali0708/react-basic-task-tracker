import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    console.log(tasks)
  return (
    <>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      })}
    </>
  )
}

export default Tasks
