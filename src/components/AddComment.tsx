import React, { useState } from "react";
import leva from "../assets/leva-pic.png";

const AddComment = ({addComment}) => {
  const [inputComment, setInputComment] = useState('')
  
 
  function handleChange(e) {
    setInputComment(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const date = new Date();

    const newCommentObject = {
      id: Math.random().toString(32).substring(2, 15),
      date: date.toLocaleString(),
      userName:"Leva",
      comment: inputComment,
    }

    addComment(newCommentObject)
    setInputComment('')
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-5 items-start">
        <img src={leva} alt="" className="w-[40px] h-[40px] rounded-full" />
        <textarea
          onChange={handleChange}
          value={inputComment}
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

export default AddComment;
