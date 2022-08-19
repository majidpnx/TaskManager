import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text){
            alert("text is empty!");
            return;
        }else{
            onAdd({text,day,reminder})

            setText("");
            setDay("");
            setReminder(false)
        }
    }

    return (
        <form className='AddForm' onSubmit={onSubmit}>
            <div className='FormControl'>
                <label>
                    title
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text" placeholder="Title" />
                </label>
            </div>
            <div className='FormControl'>
                <label>
                    day
                    <input
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        type="text" placeholder="Day" />
                </label>
            </div>
            <div className='FormControl Checkbox'>
                <label>
                    reminder
                    <input
                        value={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                        type="Checkbox" />
                </label>
            </div>
            <input type="submit" value="Save" className="SaveButton" />
        </form>
    )
}


export default AddTask