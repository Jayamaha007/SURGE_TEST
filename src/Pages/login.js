
import { useState } from 'react';
import axios from 'axios';
import Input from '@mui/material/Input';

function Login() {

   
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const[userID,setUserID] = useState('');


    const userLogin = (username,password) => {

      axios
      .get(`http://localhost:8080/user/${username}/${password}`)
      .then(res => {

        setUserID(res.data);
        console.log(userID);

      })
      
      


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        userLogin(username,password);
        alert(`The name you entered was: ${userID}`)
        localStorage.setItem('user_ID',userID)
        
      }




  return (
      <div>
        <form onSubmit={handleSubmit}>
      
            <input
               
                value={username}
                name="User Name"
                placeholder='User Name'
                onChange={(e) => setUsername(e.target.value)} />

            <input
               
                value={password}
                name="Password"
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)} />  

            <input type="submit"/>
          

        </form>
      </div>
  );
}

export default Login;
