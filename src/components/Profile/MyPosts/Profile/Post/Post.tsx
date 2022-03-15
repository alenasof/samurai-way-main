import React from 'react';

type PostPopsType = {
    message:string
 }


const Post = (props:PostPopsType) => {
    return (
        <div>
            <img src='https://bipbap.ru/wp-content/uploads/2019/06/0f4076e7f7e5ba541a13e1ef6e9cdac5-640x800.jpg' className={'image_ava'} alt={'фото'}/>
            <span> {props.message}</span>
            <div>like</div>
        </div>
    );
};

export default Post;