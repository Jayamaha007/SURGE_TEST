
import { useState } from 'react';
import axios from 'axios';

function Registration() {

    const [fullname,setFullname] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


    const registerUser = (fullname,email,username,password) => {

      axios
      .post('http://localhost:8080/user/register',{

        
          "fullName" : fullname,
          "email" : email,
          "username" : username,
          "password" : password
      
      })
      .then(function (responce) {

        console.log(JSON.stringify(responce.data))

      })
      .catch(function (error){

        alert(error.message)

      })
      


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${fullname}`)
        registerUser(fullname,email,username,password)
      }




  return (
      <div>
        <form onSubmit={handleSubmit}>
            <input
                value={fullname}
                name="Full Name"
                placeholder='Full Name'
                onChange={(e) => setFullname(e.target.value)} />
            
            <input
                value={email}
                name="Email"
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)} />

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

export default Registration;
