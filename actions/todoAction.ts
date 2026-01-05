"use server"
import mongoose from "mongoose";
import dbConnect from "@/lib/db";
import Todo from "@/models/Todo";
import { redirect } from "next/navigation";

export async function getAllTodos(){
    await dbConnect();
    const todos=await Todo.find({});
    return JSON.stringify(todos)
}

export async function addTodo(todo){
    await dbConnect();
    await Todo.create({...todo});
    redirect("/todos")
}

export async function deleteTodo(id) {
    await dbConnect();
    await Todo.findByIdAndDelete(id);
    redirect("/todos");
}

export async function updateTodo(todo) {
    await dbConnect();
    await Todo.findByIdAndUpdate(todo._id, todo);
    redirect("/todos");
  }

