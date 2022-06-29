import { useEffect, useState } from "react"

const EditModal=({editData})=>{
const [data,setData]=useState({
    first_name:"",
    last_name:"",
    phone_number:0
})
console.log(editData)
useEffect(()=>{
    setData({first_name:editData.first_name,last_name:editData.last_name,phone_number:editData.phone_number})
},[editData])
const onChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
const submitHandler=async(e)=>{
   
    e.preventDefault();
    
    let dataJson=JSON.stringify({
    first_name:data.first_name,
    last_name:data.last_name,
    phone_number:data.phone_number
    });
    console.log(dataJson);
      try{
        const response=  await fetch(`http://127.0.0.1:8000/api/v1/contacts/${editData.id}`,{
          method:'PUT',
          body:dataJson,
          headers: {
            "Content-Type": "application/json",
          }
        })
        const responseData = await response.json();
        console.log(responseData);
        setData({first_name:"",last_name:"",phone_number:""})
      }
      catch(e){
        console.log(`Error:${e}`);
      }
      
  
  
  }
    return(
        <div className="modal">
      <form onSubmit={submitHandler}>
        <b>Edit contact</b>
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
    )
}

export default EditModal