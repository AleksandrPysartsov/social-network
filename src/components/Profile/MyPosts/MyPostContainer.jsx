import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redax/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text));
//         };

//         return (
//           <MyPosts
//             posts={store.getState().profilePage.posts}
//             newPostText={store.getState().profilePage.newPostText}
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
