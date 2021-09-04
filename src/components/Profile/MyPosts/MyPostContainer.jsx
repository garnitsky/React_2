import MyPost from './MyPost';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';



//const MyPostContainer = (props) => {

//    return (
//        <StoreContext.Consumer>
//            {
//                (store) => {
//                    let state = store.getState();
//                    let addPost = () => {

//                        store.dispatch(addPostActionCreator());

//                    };

//                    let onPostChange = (text) => {

//                        let action = updateNewPostTextActionCreator(text);
//                        store.dispatch(action);
//                    };
//                    return (<MyPost updateNewPostText={onPostChange}
//                        addPost={addPost}
//                        posts={state.profilePage.posts}
//                        newPostText={state.profilePage.newPostText} />);
//                }
//            }
//        </StoreContext.Consumer>
//    );
//}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }

    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;