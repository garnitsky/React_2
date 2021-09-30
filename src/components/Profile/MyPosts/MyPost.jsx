import classes from './MyPost.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MyPost = (props) => {

    let postElement = props.posts.map(
        post => <Post
            key={post.id}
            message={post.message}
            countLike={post.countLike}
            countDislike={post.countDislike}
        />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div>
            <h3>My Post</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    )
};

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea" />
            </div>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
};

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPost;