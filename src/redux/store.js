import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: '9898981111111', countLike: '5', countDislike: '4' },
                { id: 2, message: '*/*/*/2222222', countLike: '3', countDislike: '1' },
                { id: 3, message: '4444443333333', countLike: '1', countDislike: '3' },
                { id: 4, message: '3333334444444', countLike: '0', countDislike: '2' },
                { id: 5, message: '5555555333333', countLike: '7', countDislike: '1' }
            ],
            newPostText: 'IT-Camasutra'
        },
        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Саша' },
                { id: 2, name: 'Маша' },
                { id: 3, name: 'Паша' },
                { id: 4, name: 'Даша' },
                { id: 5, name: 'Глаша' }
            ],

            messages: [
                { id: 1, message: '1111111' },
                { id: 2, message: '2222222' },
                { id: 3, message: '3333333' },
                { id: 4, message: '4444444' },
                { id: 5, message: '5555555' }
            ],
            newMessageBody: ''
        },

        newPostText: "",
        sidebar: { }
    },

    _callSubsriber() {
        console.log('ddd');
    },

    getState() {
        return this._state;  //метод для того чтоб не обращаться напрямую в стейт
    },

    subscribe(observer) {
        this._callSubsriber = observer; //dans with shaman's tambourine  паттерн наблюдатель
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubsriber(this._state);
    }
}



export default store;

//window.store = store;