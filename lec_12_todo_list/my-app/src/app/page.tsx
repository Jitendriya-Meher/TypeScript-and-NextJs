"use client";

import { useEffect, useState } from "react";

interface TodoType{
  text:string;
  status:boolean;
  id:number;
};

export default function Home() {

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newTodoText, setNewTodoText] = useState("");
  
  const getTodos = () => {

    let tempTodos = localStorage.getItem("todos");
    
    console.log("tempTodos", tempTodos);

    if( tempTodos == null){
      setTodos([]);
    }
    else{
      setTodos(JSON.parse(tempTodos));
    }

  }

  useEffect(() => {
    getTodos();
  },[]);

  const updateTodos = (id:number) => {

    let tempTodos = localStorage.getItem("todos");

    if( tempTodos){
      let parseTodos = JSON.parse(tempTodos);

      let currTodo = parseTodos.find((todo:TodoType) => todo.id === id);

      let index = parseTodos.indexOf(currTodo);

      parseTodos[index].status = ! parseTodos[index].status;

      localStorage.setItem("todos", JSON.stringify(parseTodos));
    }

    getTodos();

  }

  const createTodos = () => {

    if( newTodoText.length == 0){
      return;
    }

    const localStorageTodos = localStorage.getItem("todos");

    const newTodoObj = {
      text:newTodoText,
      status:false,
      id: new Date().getTime(),
    };

    if( localStorageTodos == null){
      localStorage.setItem("todos", JSON.stringify([newTodoObj]));
    }
    else{
      let todos = JSON.parse(localStorageTodos);
      todos.push(newTodoObj);
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    setNewTodoText("");
    getTodos();
    setShowModal(false);
  }

  const deleteTodos = (id:number) => {
    let tempTodos = localStorage.getItem("todos");

    if( tempTodos){
      let parseTodos = JSON.parse(tempTodos);

      let currTodo = parseTodos.find((todo:TodoType) => todo.id === id);

      let index = parseTodos.indexOf(currTodo);

      parseTodos.splice(index, 1);

      localStorage.setItem("todos", JSON.stringify(parseTodos));
    }

    getTodos();
  }

  return (
    <div className=" min-h-screen text-center p-5 bg-gray-200">

      <h1 className=" text-5xl p-3 font-semibold text-gray-700">
        Todo List
      </h1>
      {
        !showModal && (
          <div className=" flex flex-col gap-4 w-3/4 mx-auto p-5">
        {
          todos.length > 0 ? (
            todos.map((todo) => (
              <div className=" border-2 border-gray-500 p-2 flex items-center justify-between px-4 rounded-md bg-gray-400">
                {
                  todo.status ? (
                    <h2 className=" text-xl text-gray-300 line-through">
                  {todo.text}
                </h2>
                  ):(
                      <h2 className=" text-xl text-gray-50 ">
                    {todo.text}
                  </h2>
                  )
                }
                <div className=" flex gap-3">
                  <button className=" border-2 border-green-500 p-1 rounded-lg bg-green-300 text-green-900"
                   onClick={()=>{
                    updateTodos(todo.id);
                  }}>
                    edit
                  </button>
                  <button 
                  className="border-2 border-red-500 p-1 rounded-lg bg-red-300 text-red-900" 
                  onClick={() => {
                    deleteTodos(todo.id);
                  }}>
                    delete
                  </button>
                </div>
              </div>
            ))
          ):(
            <div className="">
              <h1>
                you have completed all your tasks
              </h1>
            </div>
          )
        }
      </div>
        )
      }

      {
        showModal && (
          <div className=" flex gap-5 mt-20 justify-center items-center">
            <input type="text"
              placeholder="Enter your todo"
              value={newTodoText}
              className=" text-lg px-3 py-2 border border-gray-700 rounded-sm outline-none text-gray-900 bg-gray-400"
              onChange={(e) => {
                setNewTodoText(e.target.value);
              }} />
              <button onClick={()=>{
                createTodos();
              }}
              className=" text-5xl border-2 border-gray-500 flex justify-center items-center px-2 bg-gray-400 rounded-full">
                +
              </button>
          </div>
        )
      }

      {
        !showModal && (
          <button onClick={() => {
            setShowModal(true);
          }}
          className=" text-3xl p-3 my-5 font-semibold text-gray-600 border-2 border-gray-600 text-center bg-gray-100 rounded-lg"
          >
            Create Todo
          </button>
        )
      }

    </div>
  );
}
