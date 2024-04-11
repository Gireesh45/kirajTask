import React from 'react'
import './index.css'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Login = () => {
    const [email, setEmail] = useState("");
    const[userData, setUserData] = useState([]);
    const Navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const HandleEmailOnchange = (e) => {
        setEmail(e.target.value);
        setEmailError(e.target.value === '');

    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://gorest.co.in/public/v2/users');
            setUserData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    const HandlePasswordOnchange = (e) => {
        setPassword(e.target.value)
        setPasswordError(e.target.value === '');
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError(email === '');
        setPasswordError(password === '');
    
        if (email !== '' && password !== '') {
            const existedUser = (userData.filter(el => el.email === email));
            if(existedUser.length !== 0) {
                Navigate("/personal")
            }
            if (password === 'admin' && email === 'admin') {
            // Handle successful login
            Navigate("/home")
          } else {
            // Handle incorrect credentials
            // Navigate("/login")
          }
        }
      };
    return (
        <form className='bg-container-login'>
            <div className='login-card'>
                <div>
                    <h3>HR Login Portal</h3>
                </div>
                <div>
                    <label className='label'>Email</label> <br />
                    <input className='password-email' type='email' onChange={HandleEmailOnchange} value={email} />
                    {emailError ? <p className='error-text'>Email is required</p> : null}
                </div>
                <div>
                    <label className='label'>Password</label>  <br />
                    <input className='password-email' type='password' onChange={HandlePasswordOnchange} value={password} />
                    {passwordError ? <p className='error-text'>Password is required</p> : null}
                </div>
                <div>
                    <button type='submit' onClick={handleSubmit} className='login-button'>Login</button>
                </div>
            </div>
        </form>
    )
}
