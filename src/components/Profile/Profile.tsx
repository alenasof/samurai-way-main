import React from 'react';
import "../../css/Profile.css"
import MyPosts from "./MyPosts/Profile/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = () => {
    return (
        <div className="content">
            <ProfileInfo />
            <MyPosts />
        </div>
    );
};

export default Profile;