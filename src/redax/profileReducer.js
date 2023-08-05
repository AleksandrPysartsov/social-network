const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "It's my first post", likeCount: "54" },
    { id: 2, message: "Hello everybody)", likeCount: "2148" },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        id: 3,
        message: state.newPostText,
        likeCount: 0,
      };
      return { ...state,
        posts: [...state.posts, newPost],
        newPostText: ""

      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.updatePostText};      
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    updatePostText: text,
  };
};

export default profileReducer;
