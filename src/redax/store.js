import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "It's my first post", likeCount: "54" },
                { id: 2, message: "Hello everybody)", likeCount: "2148" },
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);

    },

}

export default store;
window.store = store;