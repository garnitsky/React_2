
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPostContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.props} />
            <MyPostContainer />

        </div>
    )
}

export default Profile;