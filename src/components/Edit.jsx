import React, { useState } from "react";

const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-5 w-[300px] text-black mb-8 rounded placeholder:text-black-300"
        placeholder="update Task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-gray-700 border-none cursor-pointer rounded ml-2 p-2 text-white">
        Update Task
      </button>
    </form>
  );
};

export default Edit;
