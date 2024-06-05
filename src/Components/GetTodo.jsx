import axios from "axios";
import { format } from "date-fns";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const GetTodo = ({ baseurl, userId }) => {
  const [data, setData] = useState([]);
const datefns = format(new Date(), 'dd-MM-yyyy')
//   const dateandtime = new Date(date,month,year);
//   const date = dateandtime.getFullYear()
//   console.log(dateandtime);
  // console.log(datefns);
  const fetchData = async () => {
      try {
          const res = await axios.get(`${baseurl}/gettodo/${userId}`);
          toast.success(res.data.message);
          setData(res.data.todo);
          } catch (error) {
              toast.error(error.res.data.message);
              }
              };
              
              useEffect(() => {
                  fetchData();
                  }, []);
                  const deadlineDateArr = data.map((item,index)=> item.deadline)
                  const deadlineDate = deadlineDateArr.join()
                  const createdDateArr = data.map((item,index)=> item.createdDate)
                  const createdDate = createdDateArr.join()

                  // console.log(deadlineDate);
                  const comparison =  deadlineDate > createdDate
                  // console.log(comparison);                  
  return (
    <div>
      GetTodo
      <button onClick={fetchData}>Fetchdata</button>
      {data.map((item, index) => {
        return (
          <ul key={index}>
            <li>Title: {item.title}</li>
            <li className={comparison ? "text-green-500" : "text-red-600"}>Deadline: {item.deadline}</li>
            <li>Created Date: {item.createdDate}</li>
            <li>Created Time: {item.createdTime}</li>
          </ul>
        );
      })}
    </div>
  );
};
export default GetTodo;
