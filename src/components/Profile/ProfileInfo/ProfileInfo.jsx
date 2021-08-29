import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.photo_head} src="https://klike.net/uploads/posts/2020-09/1599896332_2.jpg" />
            </div>
            <div>
                ava + descr
            </div>
            <div>
                new post
            </div>
        </div>
    )
}

export default ProfileInfo;