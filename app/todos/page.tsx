import { getAllTodos } from "@/actions/todoAction";
import React from "react";
import AllTodos from "./AllTodos";

export default async function Page() {
  const allTodos = JSON.parse(await getAllTodos());

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            📝 My Todos
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your tasks efficiently
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <AllTodos allTodos={allTodos} editTodo={false} />
        </div>
      </div>

    </div>
  );
}
