import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Regristation = () => {
    const navigate=useNavigate();
    const reg_user=(e)=>{
        e.preventDefault();
        axios.post("/api/reg_user",user_data).then((res) => alert("User Regrister SuccessFully..."));
        navigate("/login");

    };
    const [user_data,setUser_data] = useState({
        name:"",
        age:0,
        email:"",
        pwd:""
    });
    return (
        <div>
            <form className="add-form">
                <h2><center>Regristation User</center></h2>
                <div className="form-control">
                    <input type="text"
                        placeholder="Full Name"
                        onChange={(e) => (setUser_data({...user_data,name:e.target.value}) )} />
                </div>
                <div className="form-control">
                    <input type="text"
                        placeholder="Age"
                        onChange={(e) => (setUser_data({...user_data,age:e.target.value}) )} />
                </div>
                <div className="form-control">
                    <input type="text"
                        placeholder="Email"
                        onChange={(e) => (setUser_data({...user_data,email:e.target.value}) )} />
                </div>
                <div className="form-control">
                    <input type="text"
                        placeholder="Password"
                        onChange={(e) => (setUser_data({...user_data,pwd:e.target.value}) )} />
                </div>
                <div className="form-control">
                    <input type="submit" value="Regristation" className="btn btn-block" onClick={reg_user} />
                </div>
                <div className="form-control">
                    <input type="button" value="Login" className="btn btn-block" onClick={()=>navigate("/login")}/>
                </div>
            </form>
        </div>
    );
}
export default Regristation

