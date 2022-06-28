import Button from "../ButtonComp/button";
import "./modal.css";
import {useState} from 'react'

const Modal = () => {
  const [data,setData]=useState({
    first_name:"",
    last_name:"",
    phone_number:0
  })
  const onChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  // console.log(data)
  const submitHandler=async(e)=>{
   
    e.preventDefault();
    
    let dataJson=JSON.stringify({
    first_name:data.first_name,
    last_name:data.last_name,
    phone_number:data.phone_number
    });
    console.log(dataJson);
      try{
        const response=  await fetch('http://127.0.0.1:8000/api/v1/contacts',{
          method:'POST',
          body:dataJson,
          headers: {
            "Content-Type": "application/json",
          }
        })
        const responseData = await response.json();
        console.log(responseData);
      }
      catch(e){
        console.log(`Error:${e}`);
      }
      
  
  
  }
// sendData();
  return (
    <div className="modal">
      <form onSubmit={submitHandler}>
        <div className="form-element" >
          <label htmlFor="first-name">First name</label>
          <input id="first-name" name='first_name' value={data.first_name} onChange={onChange} placeholder="First Name" required />
          <br />
        </div>
        <div className="form-element">
          <label htmlFor="last-name">Last name</label>
          <input id="last-name" name='last_name' value={data.last_name} onChange={onChange} placeholder="Last Name" required />
          <br />
        </div>
        <div className="form-element">
          <label htmlFor="phone-number">Phone number</label>
          <input id="phone-number" type='number' name='phone_number' value={data.phone_number} onChange={onChange}  placeholder="Phone number" required />
          <br />
        </div>
        <button className="primary">Submit</button>
      </form>
    </div>
  );
};

export default Modal;
