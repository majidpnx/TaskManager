import React from 'react'
import { FaTrash } from "react-icons/fa"
const Task = ({ task,onDelete,onreminde }) => {
    return (
        <div className={task.reminder ?'task reminder':"task" } onDoubleClick={()=>onreminde(task.id)}>
            <div className= "TitleTask " >
                <div>{task.text}
                </div>
                <FaTrash onClick={()=>onDelete(task.id)}  className='trashIcon'/>
                </div>

            <p>{task.day}</p>

        </div>
    )
}

export default Task