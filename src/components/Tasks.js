import React from 'react'
import Task from './Task'
const Tasks = ({tasks,onDelete,onreminde}) => {
 

    return (
        <div className='tasks'>
        {tasks.map((task)=>(<Task key={task.id} onDelete={onDelete} onreminde={onreminde} task={task}/>))}
        </div>
    )
}

export default Tasks