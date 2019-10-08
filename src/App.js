import React, { Component } from 'react'
import './App.css';
import User from "./component/User";
import Navbar from "./component/Navbar";
import Search from './component/Search';
import axios from 'axios';

export default class App extends Component {

  state={
    search : '',
    users: []
  }

  onChangehandler = (e) =>{
    this.setState({ [e.target.name]: e.target.value})

  }

  async componentDidMount(){
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ users: res.data});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Search searchvalue={this.state.search} onChangehandler={this.onChangehandler}/>
        <div className="container">
          <div className="row">
            <User users={this.state.users}/>           
          </div>
        </div>
      </div>
    );
  }
}



  





