import classes from './MyPost.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const MyPost = (props) => {

    let postElement = props.posts.map(post => <Post message={post.message} countLike={post.countLike} countDislike={post.countDislike} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator(text));

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (

        <div>
            <div>My Post</div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={addPost}> Add post</button>

                <div className={classes.posts}>
                    {postElement}
                </div>
            </div > </div>
    )
}

export default MyPost;