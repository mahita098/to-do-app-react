import React, { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };
  return (
    <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-5 w-[300px] text-black mb-8 rounded placeholder:text-black-300"
        placeholder="bro write something"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-gray-700 border-none cursor-pointer rounded ml-2 p-2 text-white">
        Add Task
      </button>
    </form>
  );
};

export default Form;
