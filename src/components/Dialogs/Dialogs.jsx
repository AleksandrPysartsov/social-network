import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import style from "./Dialogs.module.css";
import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redax/dialogsReducer";

const Dialogs = (props) => {
  console.log(props);
  let stateDialog = props.store.getState().dialogsPage;
  let dialogElements = stateDialog.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = stateDialog.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageEl = React.createRef();

  let sendNewMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onChangeNewMessage = (event) => {
    let text = event.target.value;
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogElements}</div>
      <div className={style.messages}>
        {messageElements}
        <div className={style.newMessage}>
          <textarea
            placeholder="Enter your message"
            onChange={onChangeNewMessage}
            value={props.store.getState().dialogsPage.newMessageText}
          />
          <button onClick={sendNewMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
