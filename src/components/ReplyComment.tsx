import React, { useState } from "react";
import leva from "../assets/leva-pic.png";

const ReplyComment = ({onAddReply}) => {
  const [inputReply, setInputReply] = useState("")

  function handleChange(e){
    setInputReply(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const newReplyObj = {
      id: Math.floor(Math.random() * 10),
      date: new Date().toLocaleString(),
      username: "Leva",
      comment: inputReply,
    }

    onAddReply(newReplyObj)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-5 items-start">
          <img src={leva} alt="" className="w-[40px] h-[40px] rounded-full" />
          <textarea
            onChange={handleChange}
            // value={content}
            placeholder="Add a comment..."
            className="w-[550px] h-[100px] flex items-start border-2 border-gray-200 rounded-md p-2"
          />
          <button type="submit" className="text-white bg-blue-900 rounded-md p-4 font-medium" >
            Reply
          </button>
        </div>
      </form>

    </div>
  );
};

export default ReplyComment;
