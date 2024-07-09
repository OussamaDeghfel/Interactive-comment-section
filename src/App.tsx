import { useState } from "react";
import Comment from "./components/Comment";
import MyComment from "./components/MyComment";

function App() {
  const [commentList, setCommentList] = useState([
    {
      id: 1,
      userName: "oussama",
      comment:
        "Lorem ipsum dolor sit amet ng elit. Nulla, minus. Minus praesentium ea eius placeat omnis rem sit blanditiis sed!",
    },
    {
      id: 2,
      userName: "Mbappe",
      comment:
        "Lorem ipsum dolor siminus. Minus praesentium ea eius placeat omnis rem sit blanditiis sed!",
    },
    {
      id: 3,
      userName: "Halland",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ]);

  function handleAddComment(newComment) {
    setCommentList([...commentList, newComment])
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

        {commentList.map((comment: any) => (
          <Comment userName={comment.userName} comment={comment.comment} />
        ))}
        <MyComment addComment={handleAddComment} />
      </div>
    </>
  );
}

export default App;
