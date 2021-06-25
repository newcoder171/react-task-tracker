import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add text')
            return
        }
        onAdd({text, date, reminder})

        setText('')
        setDate('')
        setReminder(false)
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="task">Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label htmlFor="task">Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="task">Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value="Save Task" className='btn btn-block'/>
        </form>
    )
}

export default AddTask
