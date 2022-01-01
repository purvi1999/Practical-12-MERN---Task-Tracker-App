import Task from './Task.js'
const Tasks = ({ tasks, onDelete ,onToggle,onUpdate}) => {
    return (
        <>
            {tasks.map((task,index) =>
                (<Task key={index} 
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle}
                    onUpdate={onUpdate}/>)
            )}
        </>
    );
}
export default Tasks

