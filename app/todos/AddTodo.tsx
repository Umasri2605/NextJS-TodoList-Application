// "use client"
// import { addTodo } from '@/actions/todoAction';
// import React, { useRef, useState } from 'react'

//   function AddTodo() {
//     const [newTodo,setNewTodo]=useState("");
//     const ref1=useRef()
//     async function handleNewTodo(){
//         ref1.current.value=""
//         await addTodo({title:newTodo,status:"In Progress"})
//         setNewTodo("");
//     }
//   return (
//     <div>
//         <input className='border p-1 m-1'  type="text" defaultValue={newTodo} ref={ref1} onChange={(e)=>{setNewTodo(e.target.value)}}/>
//         <button className='border p-1 m-1' onClick={handleNewTodo}>Add Todo</button>
//     </div>
//   )
// }

// export default AddTodo


"use client";

import { addTodo } from "@/actions/todoAction";
import React, { useRef, useState } from "react";

function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const ref1 = useRef<HTMLInputElement>(null);

  async function handleNewTodo() {
    if (!newTodo.trim()) return;

    await addTodo({ title: newTodo, status: "In Progress" });

    setNewTodo("");
    if (ref1.current) ref1.current.value = "";
  }

  return (
    <div className="flex items-center gap-3">
      <input
        ref={ref1}
        type="text"
        placeholder="Enter a new todo..."
        className="flex-1 px-4 py-2 border rounded-xl outline-none
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   text-gray-700"
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button
        onClick={handleNewTodo}
        className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium
                   hover:bg-blue-700 transition disabled:opacity-50"
        disabled={!newTodo.trim()}
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;

