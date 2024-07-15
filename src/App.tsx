import { useEffect, useState } from "react";
import Comment from "./components/Comment";
import AddComment from "./components/AddComment";
import ReplyComment from "./components/ReplyComment";
import NestedComment from "./components/NestedComnt/NestedComment";

// interface commentType {
//   id: number;
//   // date: number;
//   // userName: string;
//   content: string;
//   replies?: commentType[];
// }

const comments = {
  id: 1,
  replies: [
    {
      id: 124578,
      content: "kirak Dayer",
      replies: [
        {
          id: 3,
          content: "kach sport",
          replies: [],
        },
      ],
    },
    {
      id: 125487,
      content: "thala fi your health",
      replies: [{
        id: 125847,
        content: "thala",
        replies: [],
      },],
    },
  ],
};
function App() {
  const [commentList, setCommentList] = useState(comments);

  // function handleAddComment(newComment: commentType) {
  //   setCommentList([...commentList, newComment]);
  // }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full m-auto">
        {/* {commentList.map((commentList: commentType) => (
          <>
          <Comment
            // id={comment.id}
            // userName={comment.userName}
            // comment={comment.comment}
            // date={comment.date}
            // replies={comment.replies}
            commentList={commentList}
          />
          <AddComment addComment={handleAddComment} />
          </>
))}

        <AddComment addComment={handleAddComment} /> */}

        <NestedComment comment={commentList} />
      </div>
    </>
  );
}

export default App;
