import React from 'react';
import styles from "../User/User.module.css";
import ava from "../../../img/avatar-icon.png";
import axios from "axios";

class User extends React.Component {

  render () {
    return (
      <div className={styles.container}>
        <img src={!this.props.userInfo.image_ref ? ava : this.props.userInfo.image_ref} alt="ava"/>
        <div>{`
          ${this.props.userInfo.name ? this.props.userInfo.name : '' } 
          ${this.props.userInfo.midname ? this.props.userInfo.midname :  ''} 
          ${this.props.userInfo.surname ? this.props.userInfo.surname :  ''}
        `}</div>
      </div>
    )
  }
}


export default User
