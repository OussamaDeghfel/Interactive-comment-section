import { useState } from "react";
import { FaMinus, FaPlus, FaReply } from "react-icons/fa";
import mbappe from "../assets/mbappe-pic.png";
import ReplyComment from "./ReplyComment";

const Comment = ({ userName, comment }) => {
  const [vote, setVote] = useState(0);
  const [showReply, setShowReply] = useState(false);
  return (
    <div className="p-5 flex shadow-md border-gray-500 rounded-md w-fit m-5">
      
        <div className="bg-gray-400 rounded-md flex flex-col w-[30px] h-full p-2 justify-around">
          <FaPlus
            onClick={() => setVote(vote + 1)}
            size={10}
            className="text-gray-500"
          />
          <span className="text-xl py-2 text-blue-950">{vote}</span>
          <FaMinus
            onClick={() => setVote(vote - 1)}
            size={10}
            className="text-gray-500"
          />
        </div>
        <div className="flex flex-col pl-4">
          <div className="flex">
            <img
              src={mbappe}
              alt="user-image"
              className="w-[30px] h-[30px] rounded-full"
            />
            <h1 className="font-bold pl-2">{userName}</h1>
            <h2 className="pl-2">1 month ago</h2>
          </div>
          <p className="w-[550px] pt-2 text-gray-600">{comment}</p>
        </div>
        <button
          className="flex text-blue-900 space-x-2 items-center"
          onClick={() => setShowReply(!showReply)}
        >
          <FaReply size={15} />
          <span className="font-bold">Reply</span>
        </button>
      {showReply && <ReplyComment />}
    </div>
  );
};

export default Comment;
