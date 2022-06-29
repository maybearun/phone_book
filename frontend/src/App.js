import "./App.css";
import Button from "./components/ButtonComp/button";
import ListComp from "./components/ListComp/ListComp";
import Modal from "./components/modal/modal";
import {useState} from 'react'

function App() {
  const [show, setShow]=useState(false);
  const toggleModal=()=>{
    setShow(!show);
    console.log(show);
  }
  return (
    <div className="container">
      <div>
        <h1>Phone book</h1>

        <button className="primary" onClick={toggleModal}>New Contact</button>
        <ListComp />
      </div>
      <div className="toggle-form">
        {show ? <Modal/>:<></>}
      </div>

    </div>
  );
}

export default App;
