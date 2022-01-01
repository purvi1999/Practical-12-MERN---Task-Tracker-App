import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Header from "./component/Header.js";
import Tasks from "./component/Tasks.js";
import Add_task from "./component/Add_task.js";
import Footer from "./component/Footer.js";
import About from "./component/About.js";
import Login from "./component/Login.js";
import Button from "./component/Button";
import Update from "./component/Update_task";
import Regristation from "./component/Regristation";
import axios from "axios";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [editId, setId] = useState("");
  const [editText, settext] = useState("");
  const [editDay, setday] = useState("");
  const [eitReminder, setreminder] = useState(false);
  const [Auth,setAuth]=useState(false);

  //display task -
  const display_task = () => {
    axios.get("/api/getTaskData").then(res => {
      setTasks(res.data);
    }).catch(function (error) {
      console.log(error);
    })
  }

  //delete task -
  const delete_task = async (id) => {
    const data1 = {
      "task_id": id
    }
    axios.post("/api/delTaskData", data1).then(res => {
      console.log(res.data);
    }).catch(function (error) {
      console.log(error);
    })
  };

  //Toggle Reminder
  const toggleReminder = (id) => {

    //console.log(id);
    const data1 = {
      "task_id": id
    }
    axios.put("/api/taskToggle", data1).then(res => {
      console.log(res.data);
    }).catch(function (error) {
      console.log(error);
    })
  }
  const Update_task = (id, text, day, reminder) => {
    setisEdit(true);
    setId(id);
    settext(text);
    setday(day);
    setreminder(reminder);

  }
const DisableFun=()=>{
  setisEdit(false);
}
  useEffect(() => {
    display_task();
  });
  return (
    <Router>
      {isLogged && (
        <div className="container">
          <Header onAdd={() => setShowTask(!showTask)} showAddTask={showTask} />

          <Routes>
          <Route path="/Reg" element={<Regristation />} />
          <Route path="/login" element={<Login isLogged={isLogged} />} />
            <Route
              path="/"
              element={
                <>
                  {showTask && <Add_task toggleTask={DisableFun}/>}
                  {isEdit && <Update isEdit={setisEdit} Eid={editId} Etext={editText} Eday={editDay} Ereminder={eitReminder} />}
                  {/* <Button color='blue' title='Display List' onClick={display_task} /> */}
                  {tasks.length > 0 ? (
                    <Tasks
                      tasks={tasks}
                      onDelete={delete_task}
                      onToggle={toggleReminder}
                      onUpdate={Update_task}
                    />
                  ) : (
                    <p>No Task Avaiable</p>
                  )}
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;