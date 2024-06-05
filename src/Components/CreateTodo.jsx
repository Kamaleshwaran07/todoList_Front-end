import { Formik } from "formik";
import { useState } from "react";
import tick from '../assets/check.png';


const CreateTodo = () => {
const [todo, setTodo] = useState('')
const handleSubmit = ()=>{
    console.log(todo)

}

    return (
        <div>
           
           <form onSubmit={handleSubmit}>
            <div className="relative flex justify-center container">
            <input type="text" className="w-[30rem] h-16 border-2 bg-yellow-300/80 border-ashgray placeholder:text-black1 p-2 shadow-md" placeholder="Take a note...." value={todo} onChange={(e)=>setTodo(e.target.value)} required/>
            <button type="submit"><img className="w-12 h-12 absolute right-[26em] top-2" src={tick} alt="" /></button>
            </div>
           </form>
      
        </div>

    )

}

export default CreateTodo