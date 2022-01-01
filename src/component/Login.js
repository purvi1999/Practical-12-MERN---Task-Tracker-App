import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = ({isLogged}) => {
    const navigate=useNavigate();
    const login_user=(e)=>{
        e.preventDefault();
        axios.post("/api/login",user_data).then((res) => alert("Successfully login..."));
        navigate("/");

    };
    const [user_data,setUser_data] = useState({
        email:"",
        pwd:""
    });
    return (
        <div>
            <form className="add-form">
                <h2><center>Login</center></h2>
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
                    <input type="submit" value="Login" className="btn btn-block" onClick={login_user} />
                </div>
                <div className="form-control">
                    <input type="button" value="Regristation" className="btn btn-block" onClick={()=>navigate("/Reg")}/>
                </div>
            </form>
        </div>
    );
}
export default Login

