import React from 'react'
import { useState } from 'react'
const Tasks = () => {
 
    const [tasks, setTask]=useState([
       {
            id: 1,
            text: "meet a friend",
            day: "5 may",
            reminder: true
        },
         {
            id: 2,
            text: "meet a doctor",
            day: "8 may",
            reminder: true
        },
        {
            id: 3,
            text: "buy for home",
            day: "10 may",
            reminder: false
        }  
    ])
    return (
        <div className='tasks'>
        {tasks.map((task)=>(<div className='task' key={task.id}><h3 >{task.text}</h3><p>{task.day}</p></div>))}
        </div>
    )
}

export default Tasks