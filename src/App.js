import React from 'react';
import {Route,BrowserRouter as Router,Link,Routes} from "react-router-dom";
import Login from './Pages/login';
import Register from './Pages/registration';


function App() {
  return (

  
    <Router>
      <div>
        <Link to="/">
          Login 
        </Link>

        <Link to="/register">
        Register 
        </Link>

        {/* <Routes>
          <Route path="/"> <Login/>  </Route>
          <Route path="/Register"> <Register/>  </Route>


        </Routes> */}
        
      </div>
    </Router>
  );
}

export default App;