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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 15, message: body }]
            };
        default: return state;
    }

};

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
};

export default dialogsReducer;