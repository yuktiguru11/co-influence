import axios from "axios";
import { useState } from "react";

function Login(){

    const[username,setUsername] = useState('');
    const[mail,setMail] = useState('');
    const[password,setPassword] = useState('');
    let handleSubmit=(e)=>{
        e.preventDefault(); 
        let loginData = {
            userName : username,
            mail : mail,
            password: password
        }
        console.log(loginData);
        postLoginData(loginData) 
    }

    const postLoginData = async(loginData)=>{
        try {
            let data = await axios.post('http://localhost:8000/postLoginData',loginData);
            alert("Login Successful !!")
        }
        catch(err){
            alert("error", err);
        }
    }

    return (
        <>
        <div className="grid grid-cols-2 gap-2">
            <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label >Email : </label>
            <input type="mail" onChange={(e)=>{setMail(e.target.value)}}/>
            </div>
            <div>
            <label >Password : </label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div>
            <button type = "submit">Login </button>
            </div>
        </form>
        </div>
        <div>
            test
        </div>
        </div>
        </>
    )
}

export default Login;
