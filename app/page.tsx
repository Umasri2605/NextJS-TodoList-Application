
import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-lg text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          📝 Todo App
        </h1>

        <p className="text-gray-600 mb-8">
          Organize your tasks, track progress, and stay productive every day.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/todos"
            className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            View Todos
          </Link>
        </div>

      </div>
    </div>
  );
}
