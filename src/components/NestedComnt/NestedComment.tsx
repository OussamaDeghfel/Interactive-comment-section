import React, { useState } from "react";
import Action from "./Action";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

const NestedComment = ({ comment }) => {
  const [inputComment, setInputComment] = useState("");
  const [edit, setEdit] = useState(false);
  const [showInput, setShowInput] = useState(false);

  function onAddComment() {}

  function handleNewComment() {
    setShowInput(true);
  }

  return (
    <div>
      <div>
        {comment.id === 1 ? (
          <div className="flex">
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
          </div>
        ) : (
          <div className="grid">
            <span className="bg-gray-500 rounded-md p-2 m-2 text-white">
              {comment.content}
            </span>
            <div className="flex">
              {edit ? (
                <>
                  <Action type="Save" />
                  <Action type="Cancel" handleClick={() => setEdit(false)} />
                </>
              ) : (
                <>
                  <Action
                    type="Reply"
                    handleClick={handleNewComment}
                  />
                  <Action type="Edit" handleClick={() => setEdit(true)} />
                  <Action type="Delete" />
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="ml-4 ">
        {showInput && (
          <div className="grid">
            <input
              type="text"
              placeholder="add reply ..."
              autoFocus
              onChange={(e) => setInputComment(e.target.value)}
              className="p-2"
            />
            <div className="flex">
              <Action type="Reply" />
              <Action type="Cancel" handleClick={() => setShowInput(false)} />
            </div>
          </div>
        )}
        {comment?.replies?.map((cmnt) => {
          return <NestedComment key={cmnt.id} comment={cmnt} />;
        })}
      </div>
    </div>
  );
};

export default NestedComment;
