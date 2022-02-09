import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

function UserProfile() {

    const [fullname,setFullname] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const[userID,setUserID] = useState('');
    const[userDetails,setUserDetails] = useState('');



    useEffect(() => {
      
      localStorage.setItem('user_ID',7)
      setUserID(localStorage.getItem('user_ID'))
      findUserByID()
      console.log(userID)
    });


    const findUserByID = () => {

    axios
    .get(`http://localhost:8080/user/${userID}`)

    

    .then(res => {

      setUserDetails(res.data);
      console.log(res.data);

    })

  }



  const updateProfile = (userID,fullname,email,username,password) => {

    axios
    .post('http://localhost:8080/user/register',{

        "userID": userID,
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
        updateProfile(userID,fullname,email,username,password)
      }




  return (
      <div>
        <form onSubmit={handleSubmit}>
            <input
                value={userDetails.fullName}
                name="Full Name"
                onChange={(e) => setFullname(e.target.value)} />
            
            <input
                value={userDetails.email}
                name="Email"
                onChange={(e) => setEmail(e.target.value)} />

            <input
                value={userDetails.username}
                name="User Name"
                onChange={(e) => setUsername(e.target.value)} />

            <input
                value={userDetails.password}
                name="Password"
                onChange={(e) => setPassword(e.target.value)} />  

            <input type="submit"/>
          

        </form>
      </div>
  );
}

export default UserProfile;
