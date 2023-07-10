import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={style.content}>
      My posts
      <div>New post</div>
      <Post message="It's my first post" like="54" />
      <Post message="I understood props" like="2148" />
    </div>
  );
};

export default MyPosts;
