import { useState } from "react";
import axios from "axios";
const Add_task = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        if (Task_data.text) {
            console.log(Task_data);
            axios.post("/api/registration",Task_data).then((res) => alert("Data Regrister..."));
        }
        else {
            alert("Please Fill Information");
        }
    };
   
    const [Task_data,SetTaskData]=useState( {
        text: "",
        day: "",
        reminder:false,
    });
    return (
        <div>
            <form name="f1" className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Tasks</label>
                    <input type="text"
                        placeholder="Add Tasks"
                        onChange={(e) => (SetTaskData({...Task_data,text:e.target.value}) )} />
                </div>
                <div className="form-control">
                    <label>Day & Time</label>
                    <input type="text"
                        placeholder="Add Day & Time"
                        onChange={(e) => (SetTaskData({...Task_data,day:e.target.value}) )}/>
                </div>
                <div className="form-control form-control-check">
                    <label>Set Reminder</label>
                    <input type="checkbox"
                      onChange={(e) => (SetTaskData({...Task_data,reminder:!Task_data.reminder}) )} />
                </div>
                <div className="form-control">
                    <input type="submit" value="Save Tasks" className="btn btn-block" />
                </div>
            </form>
        </div>
    );
}
export default Add_task

