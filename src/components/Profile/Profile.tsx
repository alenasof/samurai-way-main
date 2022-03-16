import React from "react";
import "../../css/Profile.css";
import MyPosts from "./MyPosts/Profile/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type arrPost = {
  message: string;
};
let arrPosts: Array<arrPost> = [
    { message: "Hi, how are you" },
    { message: "My name is" },
    { message: "Hi, how are you" },
    { message: "Get" },
];


const Profile: React.FC = () => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts posts={arrPosts} />
    </div>
  );
};

export default Profile;
