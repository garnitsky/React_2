const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 15, message: body }]
            };
        default: return state;
    }

};

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};

export default dialogsReducer;