import { useEffect, useState } from "react";
import Comment from "./components/Comment";
import AddComment from "./components/AddComment";
import ReplyComment from "./components/ReplyComment";
import NestedComment from "./components/NestedComnt/NestedComment";
import useComment from "./components/hooks/useComment";

// interface commentType {
//   id: number;
//   // date: number;
//   // userName: string;
//   content: string;
//   replies?: commentType[];
// }

const comments = {
  id: 1,
  replies: [],
};
function App() {
  const [commentList, setCommentList] = useState(comments);

  const { insertComment, editComment, deleteComment } = useComment();

  const handleInsertComment = (folderId, item) => {
    const result = insertComment(commentList, folderId, item);
    setCommentList(result);
  };

  const handleEditComment = (folderId, item) => {
    const result = editComment(commentList, folderId, item);
    setCommentList(result);
  };

  const handleDeleteComment = (folderId) => {
    const result = deleteComment(commentList, folderId);
    const temp = { ...result };
    setCommentList(temp);
  };

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

        <NestedComment
          handleInsertComment={handleInsertComment}
          handleEditComment={handleEditComment}
          handleDeleteComment={handleDeleteComment}
          comment={commentList}
        />
      </div>
    </>
  );
}

export default App;
