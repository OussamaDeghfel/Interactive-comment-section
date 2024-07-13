import { useEffect, useState } from "react";
import Comment from "./components/Comment";
import AddComment from "./components/AddComment";

interface commentType {
  id: number;
  date: number;
  userName: string;
  comment: string;
  replies?: commentType[];
}

function App() {
  const [commentList, setCommentList] = useState([
    {
      id: 1,
      userName: "oussama",
      date: 1,
      comment:
        "Lorem ipsum dolor sit amet ng elit. Nulla, minus. Minus praesentium ea eius placeat omnis rem sit blanditiis sed!",
      replies: [],
    } as commentType,
  ]);

  function handleAddComment(newComment: commentType) {
    setCommentList([...commentList, newComment]);
  }

  useEffect(() => {
    localStorage.setItem("commentList", JSON.stringify(commentList))
  }, [commentList])

  useEffect(() => {
    const commentList = JSON.parse(localStorage.getItem("commentList") || "[]")
    setCommentList(commentList)
  },[])


  return (
    <>
      <div className="flex flex-col justify-center items-center h-full m-auto">
        {commentList.map((comment: commentType) => (
          <Comment
            id={comment.id}
            userName={comment.userName}
            comment={comment.comment}
            date={comment.date}
            replies={comment.replies}
          />
        ))}

        <AddComment addComment={handleAddComment} />
      </div>
    </>
  );
}

export default App;
