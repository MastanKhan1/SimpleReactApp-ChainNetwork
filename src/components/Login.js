import '../styles/body.css'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
const Login = ()=>{


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let navigate = useNavigate();
    return(
        <>
        <div className="register">
            <h1 className='reg-heading'>Welcome to the Login Page!</h1>
            <input type="text" placeholder="enter your name" name='name' value={name} onChange={(ele)=>{setName(ele.target.value)}}/>
            <input type="text" placeholder="enter your email" name='email' value={email} onChange={(ele)=>{setEmail(ele.target.value)}}/>
            <input type="password" placeholder="enter your password" name='password' value={password} onChange={(ele)=>{setPassword(ele.target.value)}}/>
            <button className='submit-btn' onClick={()=>{ console.log(name)}}>Submit</button>
            <button onClick={()=>{
                let path = '/';
                navigate(path);
            }}>register</button>
        </div>
        </>
    )
}


export default Login;
