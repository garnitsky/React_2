import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://pixelbox.ru/wp-content/uploads/2018/02/tumblr_okgix22aav1rpwm80o1_250.png' />
                {props.message}
            </div>
            <div>
                <span>{props.countLike}Like</span>
                <span>{props.countDislike}Dislike</span>
            </div>
        </div>
    )
}

export default Post;
