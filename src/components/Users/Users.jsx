import React from 'react';
import styles from "../Users/Users.module.css";
import axios from "axios";
import {Pagination} from 'antd';
import 'antd/dist/antd.css'
import User from "./User/User";

class Users extends React.Component {
  state = {
    persons: [],
    currentPage: 1
  }

  componentDidMount () {
    axios
      .get('https://213.184.245.66:5010/api/get_all_people', {
        auth: {
          username: 'fetest',
          password: 'root123456'
        }
      })
      .then(response => {
        this.setState({persons: response.data.data.people})
        console.log(this.state.persons)
      })
  }

  onPageChange = (page) => {
    this.setState({currentPage: page})
  }

  render () {
    return (
      <div className={styles.container}>
        {this.state.persons
          .map(p => <User key={p.id} userInfo={p}/>)
          .splice(this.state.currentPage === 1 ? 0 : +(this.state.currentPage + '0') - 10, 15)}

        <Pagination currentDefault={this.state.currentPage} onChange={this.onPageChange} showSizeChanger={false} total={254}/>
      </div>
    )
  }
}

export default Users
