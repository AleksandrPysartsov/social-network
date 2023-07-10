import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.post}>
      <img
        src="https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE3/630f5c7fd1d4a867d8cb3a01/IMAGE_2_3_XL.jpg"
        alt="Avatar"
      />
      <span className={style.item}>{props.message}</span>
      <div>Like: {props.like}</div>
    </div>
  );
};

export default Post;
