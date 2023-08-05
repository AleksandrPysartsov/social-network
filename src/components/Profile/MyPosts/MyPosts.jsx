import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.posts.map((post) => (
    <Post message={post.message} like={post.likeCount} key = {post.id} />
  ));

  // let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost ();
  };

  let onPostChange = (e) => {
    let text = e.target.value
    // let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={style.content}>
      <h3>My posts </h3>
      <div className={style.newPost}>
        <textarea
          onChange={onPostChange}
          // ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={onAddPost}>add post</button>
      </div>
      {postElement}
    </div>
  );
};

export default MyPosts;
