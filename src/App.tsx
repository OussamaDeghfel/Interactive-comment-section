import { useState } from "react";
import Comment from "./components/Comment";
import AddComment from "./components/AddComment";

interface commentType {
  id: number;
  userName: string
  comment: string
}

function App() {
  const [commentList, setCommentList] = useState([
    {
      id: 1,
      userName: "oussama",
      comment:
        "Lorem ipsum dolor sit amet ng elit. Nulla, minus. Minus praesentium ea eius placeat omnis rem sit blanditiis sed!",
    } as commentType
  ]);

  function handleAddComment(newComment: commentType) {
  
    setCommentList([...commentList, newComment]);

  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full m-auto">
        {/* <Comment
          userName={"oussama"}
          comment={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis totam quo eius numquam ab pariatur hic non voluptas consequatur?"
          }
        /> */}

        {commentList.map((comment: commentType) => (
          <Comment userName={comment.userName} comment={comment.comment} />
        ))}
        <AddComment addComment={handleAddComment} />
      </div>
    </>
  );
}

export default App;
