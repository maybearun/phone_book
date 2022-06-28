import { useEffect,useState } from "react";
import ListItem from "./ListItem";
// import "./ListComp.css";

const ListComp = () => {
  const [data, setData] = useState([]);
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
    

console.log(data);

  return (
    <div>
      {data.map((data)=><ListItem key={data.id} phoneData={data} handleDelete={handleDelete}/>)}
    </div>
  );
};

export default ListComp;
