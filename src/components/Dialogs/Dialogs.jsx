import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import style from "./Dialogs.module.css";
import React from "react";

const Dialogs = (props) => {
  let stateDialog = props.dialogsPage;
  let dialogElements = stateDialog.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key = {dialog.id} />
  ));

  let messageElements = stateDialog.messages.map((message) => (
    <Message message={message.message} key = {message.id} />
  ));

  // let newMessageEl = React.createRef();

  let sendNewMessage = () => {
    props.sendMessage();
  };

  let onChangeNewMessage = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
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
            value={props.newMessageText}
          />
          <button onClick={sendNewMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
