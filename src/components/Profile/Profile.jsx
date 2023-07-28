import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profileData.posts}
        newPostText={props.profileData.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
