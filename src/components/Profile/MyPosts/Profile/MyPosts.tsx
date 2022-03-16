import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import { arrPost } from "../../Profile";

type MyPostsPropsType = {
  posts: Array<arrPost>;
};


const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postItems = props.posts.map((post, index) => (
    <Post key={index} message={post.message} />
  ));
  return (
    <div>
      <h3>My posts</h3>
      <textarea className={styles.textarea} />
      <button className={styles.button}>add post</button>
      {postItems}
    </div>
  );
};

export default MyPosts;
