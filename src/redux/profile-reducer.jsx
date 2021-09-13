const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: '9898981111111', countLike: '5', countDislike: '4' },
        { id: 2, message: '*/*/*/2222222', countLike: '3', countDislike: '1' },
        { id: 3, message: '4444443333333', countLike: '1', countDislike: '3' },
        { id: 4, message: '3333334444444', countLike: '0', countDislike: '2' },
        { id: 5, message: '5555555333333', countLike: '7', countDislike: '1' }
    ],
    newPostText: 'введите текст',
    prfile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.prfile
            }
        }
        default:
            return state;

    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export const setUserProfile = (prfile) => {
    return {
        type: SET_USER_PROFILE,
        prfile
    }
};

export default profileReducer;