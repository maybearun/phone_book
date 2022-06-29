import "./ListComp.css";
import Button from "../ButtonComp/button";


const ListItem = ({phoneData,handleDelete,editHandler}) => {
  
  return (
    <div className="list">
      <p>
        <b>{phoneData.first_name} {phoneData.last_name}</b>
      </p>
      <p>{phoneData.phone_number}</p>
      {/* <Button type="edit" content="Edit"></Button>
      <Button class="danger" content="Delete"></Button> */}

      <button className="edit" onClick={()=>editHandler(phoneData.id)}>Edit</button>
      <button className="danger" onClick={()=>handleDelete(phoneData.id)}>Delete</button>

    </div>
  );
};

export default ListItem;
