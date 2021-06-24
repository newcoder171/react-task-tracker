const tasks = [
    {
        id: 1,
        text: 'Doctors appointment',
        date: 'June 6th at 2:30pm',
        reminder: true
    }
]
const Tasks = () => {
    return (
        <>
           {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))} 
        </>
    )
}

export default Tasks
