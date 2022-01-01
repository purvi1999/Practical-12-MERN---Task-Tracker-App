import { useState } from "react";
import {fa, FaAccusoft, FaEdit, FaTimes} from 'react-icons/fa';
//const {taskData,setTaskData}=useState([]);
const Tasks = ({ task,onDelete,onToggle,onUpdate}) => {
    //axios.get("/api/getTaskData").then((res) =>console.log(res.data));
    return (
        <>
            <div className={`task ${task.reminder ? 'reminder':''}`} >
                <h3 ><p onClick={()=>onToggle(task._id)}>{task.text}</p> <span>
                    <FaEdit style={{color:"blue"}} 
                    onClickCapture={()=>onUpdate(task._id,task.text,task.day,task.reminder)}/> &nbsp;
                    <FaTimes style={{color:"red",cursor:"pointer"}} 
                    onClick={()=>onDelete(task._id)}/></span></h3>
                <p>{task.day}</p>
            </div>
            
        </>
    );
}
export default Tasks

