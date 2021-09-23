import classes from './ProfileInfo.module.css';
import Preloader from './../../preloader/preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={'привет'} />
            </div>
            <div>
                new post
            </div>
        </div>
    )
}

export default ProfileInfo;