import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center bg-yellow-500 text-red py-3 px-4 rounded mb-1 cursor-pointer">
      <p className="font-primary">{task.task}</p>
      <div className="flex items-center gap-x-4">
        <AiFillEdit
          className="text-xl"
          onClick={() => {
            editTodo(task.id);
          }}
        />
        <BsFillTrashFill
          className="text-xl"
          onClick={() => {
            deleteTodo(task.id);
          }}
        />
      </div>
    </div>
  );
};

export default Todo;
