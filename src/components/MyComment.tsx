import React, { useState } from "react";
import leva from "../assets/leva-pic.png";

const MyComment = ({addComment}) => {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addComment(message);
    setMessage("");
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-5 items-start">
        <img src={leva} alt="" className="w-[40px] h-[40px] rounded-full" />
        <textarea
          onChange={handleChange}
          placeholder="Add a comment..."
          className="w-[550px] h-[100px] flex items-start border-2 border-gray-200 rounded-md p-2"
        />
        <button className="text-white bg-blue-900 rounded-md p-4 font-medium">
          Send
        </button>
      </div>
    </form>
  );
};

export default MyComment;
