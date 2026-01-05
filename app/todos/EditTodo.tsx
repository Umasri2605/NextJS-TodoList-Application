"use client";
import React, { useRef, useState } from "react";
import { updateTodo } from "@/actions/todoAction";

function EditTodo({ todo   }) {
  const [etodo, setETodo] = useState({ ...todo });
  const ref1 = useRef();

  async function handleUpdateTodo() {
    if (!etodo.title.trim()) return;

    await updateTodo(etodo);

    if (ref1.current) ref1.current.value = "";
  }

  return (
    <div className="flex items-center gap-3">
      <input
        ref={ref1}
        type="text"
        defaultValue={todo.title}
        placeholder="Update todo..."
        onChange={(e) =>
          setETodo({ ...etodo, title: e.target.value })
        }
        className="flex-1 px-4 py-2 border rounded-xl outline-none
                   focus:ring-2 focus:ring-green-500 focus:border-green-500
                   text-gray-700" />

      <button
        onClick={handleUpdateTodo}
        className="px-5 py-2 rounded-xl bg-green-600 text-white font-medium
                   hover:bg-green-700 transition disabled:opacity-50"
        disabled={!etodo.title.trim()}> Update</button>
    </div>
  );
}

export default EditTodo;
