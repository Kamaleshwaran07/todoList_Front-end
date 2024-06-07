import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import trash from "../assets/delete.png"

const GetTodo = ({ baseurl, userId, item, fetchData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [todoId, setTodoId] = useState("");

  console.log(todoId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payloads = {
      title: title,
      status: status,
    };
    console.log(payloads);
    try {
      const res = await axios.put(`${baseurl}/edittodo/${todoId}`, payloads, {
        withCredentials: true,
      });
      toast.success(res.data.message);
      fetchData()
      setIsEditing(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleDelete = async () =>{
   
    try {
      const res = await axios.delete(`${baseurl}/deltodo/${todoId}`,{withCredentials:true})
      toast.success(res.data.message);
      fetchData()
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div
      className="flex flex-row"
      onDoubleClick={() => {
        setIsEditing(true);
        setTodoId(item._id);
      }}
    >
      <div>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <input
              name="title"
              placeholder={item.title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-48 h-12"
            />
            <select
              value={status}
              name="status"
              onChange={(e) => setStatus(e.target.value)}
              className={isEditing ? "visible" : "hidden"}
              id=""
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="">
            <div
              className={
                item.status === "completed" ? " text-gray-500 text-xl items-center flex line-through list-none" : "text-2xl flex items-center uppercase text-re list-none"

              }
            >
              <li className="me-3">

              {item.title}
              </li>
              <li className="me-3">

              {item.status}
              </li>
              <button type="button" onClick={()=> 
              {
                setTodoId(item._id)
                setTimeout(()=>{
                  handleDelete()
                },1000)
              }}>
                  <img src={trash} alt="delete" className="w-6" />
                  </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default GetTodo;
