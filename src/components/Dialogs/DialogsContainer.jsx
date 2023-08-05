import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redax/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  };
};

let DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
