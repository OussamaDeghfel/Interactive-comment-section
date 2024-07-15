import React, { useState } from "react";

const NestedComment = ({ comment }) => {
  const [inputComment, setInputComment] = useState("");

  function onAddComment() {}

  return (
    <div>
      <div className="flex">
        {comment.id === 1 ? (
          <>
            <input
              type="text"
              placeholder="type comment..."
              className="p-2 border-2 border-blue-400 rounded-md"
              onChange={(e) => setInputComment(e.target.value)}
              value={inputComment}
            />
            <div
              className="p-2 border-2 bg-blue-400 rounded-md text-white cursor-pointer"
              onClick={onAddComment}
            >
              comment
            </div>
          </>
        ) : (
          <span className="bg-gray-500 rounded-md p-2 m-2 text-white">{comment.content}</span>
        )}
      </div>
      <div className="ml-4 ">
        {comment?.replies?.map((cmnt) => {
          return <NestedComment key={cmnt.id} comment={cmnt} />;
        })}
      </div>
    </div>
  );
};

export default NestedComment;
