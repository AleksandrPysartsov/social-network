const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    { id: 1, name: "Alex" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Olya" },
    { id: 4, name: "Vasya" },
    { id: 5, name: "Shurik" },
    { id: 6, name: "Dimych" },
    { id: 7, name: "Kostya" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Nice to meet you" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.updateNewText };
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return { type: SEND_MESSAGE };
};

export const updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, updateNewText: text };
};

export default dialogsReducer;
