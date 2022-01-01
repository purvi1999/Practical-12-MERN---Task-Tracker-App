import { useState ,useEffect } from "react";
import axios from "axios";
const Update_task = ({isEdit,Eid,Etext,Eday,Ereminder}) => {
    
    const [text, setText] = useState(Etext);
    const [day, setDay] = useState(Eday);
    const [reminder, setreminder] = useState(Ereminder);
    const onSubmit = (e) => {
        e.preventDefault();
        const Task_data = {
            id:Eid,
            text:text,
            day:day
        };
            axios.put("/api/UpdateTask",Task_data).then((res) => console.log("Data Updated....."));
            isEdit(false);
    };
    
    return (
        <div>
            <form name="f2" className="add-form" onSubmit={onSubmit}>
               <h2>Edit Task</h2>
                <div className="form-control">
                    <label>Tasks</label>
                    <input type="text"
                        placeholder="Add Tasks"
                        value={text}                       
                        onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Day & Time</label>
                    <input type="text"
                        placeholder="Add Day & Time"
                        value={day}
                        onChange={(e) => setDay(e.target.value)} />
                </div>
                
                <div className="form-control">
                    <input type="submit" value="Edit Tasks" className="btn btn-block" />
                </div>
            </form>
        </div>
    );
}
export default Update_task;

