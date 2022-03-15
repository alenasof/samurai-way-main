import React from 'react';
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img className={styles.picture} src=" https://u7.uidownload.com/vector/856/110/vector-vector-nature-landscape-illustration-svg-ai.jpg" alt='blalbabla' />
            <div className=" "> ava+description </div>
        </div>
    );
};

export default ProfileInfo;