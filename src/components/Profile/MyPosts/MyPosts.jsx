import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redax/profileReducer";

const MyPosts = (props) => {
  let postElement = props.posts.map((post) => (
    <Post message={post.message} like={post.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={style.content}>
      <h3>My posts </h3>
      <div className={style.newPost}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>add post</button>
      </div>
      {postElement}
    </div>
  );
};

export default MyPosts;
