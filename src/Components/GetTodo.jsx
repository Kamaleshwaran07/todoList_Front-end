import axios from "axios";
import { format, formatDistance, parseISO } from "date-fns";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const GetTodo = ({ baseurl, userId, item }) => {
  let deadlineDate = JSON.stringify(item.deadline)
deadlineDate = deadlineDate.slice(1,11)

function dateConverter(str){
  var date = new Date(str),
  mnth = ("0" + (date.getMonth()+1)).slice(-2),
  day  = ("0" + date.getDate()).slice(-2);
  var hours  = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);
  var year = date.getFullYear();
  return `${day}/${mnth}/${year}, Time: ${hours}:${minutes}`
}

  const comparison = formatDistance(item.createdAt, item.deadline)
  
  return (
    <div>
      <div>

      {item.title}
      </div>
      <div>
        Created On: {dateConverter(item.createdAt)}
      </div>
      <div>
        Deadline: {dateConverter(item.deadline)}
      </div>
      <div>Your todo Deadline : {comparison}</div>
     </div>
  );
};
export default GetTodo;
