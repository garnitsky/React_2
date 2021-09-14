import classes from './ProfileInfo.module.css';
import Preloader from './../../preloader/preloader';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={classes.photoHead} alt='ddd' src="https://klike.net/uploads/posts/2020-09/1599896332_2.jpg" />
            </div>
            <div>
                <img src={props.profile.photos.large} />
            </div>
            <div>
                new post
            </div>
        </div>
    )
}

export default ProfileInfo;