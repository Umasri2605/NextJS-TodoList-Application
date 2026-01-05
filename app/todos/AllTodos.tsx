"use client";
import { deleteTodo } from "@/actions/todoAction";
import { AnyActionArg, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";

function AllTodos({ allTodos, editTodo }:any) {
  const [editFlag, setEditFlag] = useState(editTodo);
  const [selectedTodo, setSelectedTodo] = useState(null);

  async function handleDeleteTodo(id:any) {
    await deleteTodo(id);
  }

  function handleEditTodo(todo:any) {
    setEditFlag(true);
    setSelectedTodo({ ...todo });
  }

  useEffect(() => {
    setEditFlag(false);
  }, [editTodo]);

  return (
    <div className="w-full">
      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          📋 All Todos
        </h1>
      </div>

      <div className="mb-6 bg-gray-50 p-4 rounded-xl border">
        {!editFlag && <AddTodo />}
        {editFlag && selectedTodo && <EditTodo todo={selectedTodo} />}
      </div>

      <ul className="space-y-3">
        {allTodos.length === 0 && (
          <p className="text-center text-gray-500">
            No todos found. Add one 🚀
          </p>
        )}

        {allTodos.map((todo:any) => (
          <li
            key={todo._id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition">
            <div>
              <p className="text-gray-800 font-medium">
                {todo.title}
              </p>
              <span
                className={`text-xs px-2 py-1 rounded-full
                  ${todo.status === "Completed" && "bg-green-100 text-green-700"}
                  ${todo.status === "In Progress" && "bg-yellow-100 text-yellow-700"}
                  ${todo.status === "Pending" && "bg-red-100 text-red-700"}
                `}
              >
                {todo.status}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleEditTodo(todo)}
                className="px-3 py-1 rounded-lg text-sm bg-orange-100 text-orange-700 hover:bg-orange-200 transition">Edit</button>

              <button
                onClick={() => handleDeleteTodo(todo._id)}
                className="px-3 py-1 rounded-lg text-sm bg-red-100 text-red-700 hover:bg-red-200 transition">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTodos;
