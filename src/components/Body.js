import '../styles/body.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Body = ()=>{


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let navigate = useNavigate();

    const routeChange = ()=>{
            let path = 'login';
            navigate(path);
    }

    const user = useSelector(store => store.users.user)

    const dispatch = useDispatch();

    const addUser = (name, email, password)=>{
        dispatch(addItem({name, email, password}))
    }


    return(
        <>
        <div className="register">
            <h1 className='reg-heading'>Welcome to the Registration Page!</h1>
            <input type="text" placeholder="enter your name" name='name' value={name} onChange={(ele)=>{setName(ele.target.value)}}/>
            <input type="text" placeholder="enter your email" name='email' value={email} onChange={(ele)=>{setEmail(ele.target.value)}}/>
            <input type="password" placeholder="enter your password" name='password' value={password} onChange={(ele)=>{setPassword(ele.target.value)}}/>
            <button className='submit-btn' onClick={()=>{ addUser({name : name, email: email, password: password}); console.log(name)}}>Submit</button>
            <button onClick={routeChange}>Login</button>
        </div>
        </>
    )
}


export default Body;
