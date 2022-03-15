import React from 'react';
import { NavLink } from 'react-router-dom';
import  styles from './DialogStyles.module.css'

type DialogItemProps ={
    name:string;
    path:string;
}

type MessagePropsType = {
    text:string;
}


const DialogItem =(props:DialogItemProps) => {
    return(
      <div className={styles.dialog}><NavLink to={props.path}>{props.name}</NavLink></div>
    )
}

const Message= (props:MessagePropsType) =>{
 return   (
     <div className={styles.message}>{props.text}</div>
 )
}

const Dialog = () => {
    return (
            <div className={styles.dialogs}>
                <div className= {styles.dialogs_item}>
                    <DialogItem name='Dmitry' path = '/dialogs/1'/>
                    <div className={styles.dialog}>Valery</div>
                    <div className={styles.dialog}>Alena</div>
                    <div className={styles.dialog}>Helen</div>
                    <div className={styles.dialog}>Stasya</div>
                    <div className={styles.dialog}>Kate</div>
                </div>
             <div className={styles.dialogs_messages}>
                  <Message text='Hi' />
                 <div className={styles.message}>How is your</div>
                 <div className={styles.message}> Yo</div>
             </div>
            </div>
    );
};

export default Dialog;