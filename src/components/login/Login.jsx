import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [un, setUn] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState(false)
    const navigate=useNavigate();

    const Readusername = (event) => {
        event.preventDefault();
        setUn(event.target.value)
        console.log(event.target.value);
    }

    const Readpassword = (event) => {
        event.preventDefault();
        setPwd(event.target.value)
        console.log(event.target.value);
    }

    const Savedata = (event) => {
        event.preventDefault();
        if (un.trim() === '' || pwd.trim() === '') {
            setError(true)
            return
        }
        else {
            setError(false)
            navigate('/home')
        }
    }



    return (
        <div>
            <form>
                <h1 className='c'>Sign In</h1>
                <center>
                    Username <input type='text' onChange={Readusername} name='usr' id='u1' />
                    <br />
                    <br />
                    Password <input type='password' onChange={Readpassword} name='pass' id='p1' />
                    <br />
                    <br />
                    <button onClick={Savedata}>Login</button>
                    <br />
                    <br />
                </center>
            </form>

            <center>

                {error && 'All fields must be entered'}

            </center>


        </div>
    )
}

export default Login