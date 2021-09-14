import classes from './MyPost.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const MyPost = (props) => {

    let postElement = props.posts.map(post => <Post key={post.id} message={post.message} countLike={post.countLike} countDislike={post.countDislike} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {

        props.addPost();

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };

    return (

        <div>
            <div>My Post</div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={onAddPost}> Add post</button>

                <div className={classes.posts}>
                    {postElement}
                </div>
            </div > </div>
    )
}

export default MyPost;