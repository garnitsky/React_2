
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from './MyPosts/MyPost';

const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo />
            <MyPost posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />

        </div>
    )
}

export default Profile;