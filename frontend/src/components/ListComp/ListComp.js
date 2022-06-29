import { useEffect,useState } from "react";
import ListItem from "./ListItem";
import EditModal from "../modal/editModal";
import "./ListComp.css";
import Modal from "../modal/modal";

const ListComp = () => {
  const [data, setData] = useState([]);
  const [editData,setEditData]=useState({});
  const [show,setShow]=useState(false);
  useEffect(()=>{
      const fetchData= async()=>{
        const response=  await fetch('http://127.0.0.1:8000/api/v1/contacts')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      }
        fetchData();
   
},[data]);
  const handleDelete=async(id)=>{
    try{
      const response=await fetch(`http://127.0.0.1:8000/api/v1/contacts/${id}`,{
        method: 'DELETE',
      });
      console.log(response.status)

    }
    catch(e){
      console.log(`Error:${e}`);
    }

  };
  
const editHandler=async(id)=>{
  setShow(!show);
  console.log(id)
    const response=  await fetch(`http://127.0.0.1:8000/api/v1/contacts/${id}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    setEditData(responseData);

}

// console.log(editData);
  return (
    <div>
      {data.map((data)=><ListItem key={data.id} phoneData={data} handleDelete={handleDelete} editHandler={editHandler}/>)}
      <div className="toggle-form">
        {show ? <EditModal editData={editData}/>:<></>}
      </div>
    </div>
  );
};

export default ListComp;
