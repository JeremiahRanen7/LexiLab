import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { useState } from 'react';
// import Brief from './components/Brief';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom"

function App(){
  //lifting state from child components to parent components
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggler = () =>{
    if(mode === "light"){
      setMode("dark")
      showAlert("Dark Mode has been enabled" , "success")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
    else{
      setMode("light")
      showAlert("Light Mode has been enabled" , "success")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }
  return(
    // <Router>
      <div className='header'>
      <Navbar mode={mode} toggler={toggler}/>
      <Alert alert={alert}/>
      <div className="con-class container my-3">
      {/* <Switch> */}
      {
        /* use of exact
        if there is no react , then partial matching would take place like the below :
        /user ---> component1
        /user/1 ---> component2
        but here it would render the component 1 because it matches the path partially*/
      }
      {/* <Route exact path="/Brief"> */}
        {/* <Brief/> */}
      {/* </Route> */}
        {/* <Route exact path="/"> */}
          <Form showAlert={showAlert}/>
        {/* </Route> */}
      {/* </Switch> */}
          {/* <Brief/> */}
      </div>
    </div>
    // </Router>
  )
}

export default App;

