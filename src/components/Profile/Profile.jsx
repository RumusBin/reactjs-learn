import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo name={props.peopleName}/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;