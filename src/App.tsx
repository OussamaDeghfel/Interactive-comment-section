import Comment from "./components/Comment";
import MyComment from "./components/MyComment";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen m-auto">
        <Comment
          userName={"oussama"}
          comment={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis totam quo eius numquam ab pariatur hic non voluptas consequatur?"
          }
        />
        <MyComment />
      </div>
    </>
  );
}

export default App;
