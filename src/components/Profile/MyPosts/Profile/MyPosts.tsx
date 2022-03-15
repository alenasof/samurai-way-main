import React from 'react';
import Post from "./Post/Post";
import './MyPosts.css'

    const MyPosts = () => {
                return (
                        <div>
                            <div>
                            <div>my posts</div>
                            <textarea/>
                            < button>add post</button>
                           </div>
                            <Post message = {'Hi, how are you'} />
                            <Post message = {'My name is'} />
                        </div>
                );
            };

export default MyPosts;