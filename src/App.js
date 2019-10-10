import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Users from "./component/Users";
import User from './component/User';
import Navbar from "./component/Navbar";
import Search from './component/Search';
import Alert from './component/Alert';
import About from './component/pages/About';
import Footer from './component/footer';
import axios from 'axios';


export default class App extends Component {

  state = {
    loading: false,
    users: [],
    user: {},
    alert: null
  }

  // searches for guthub users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false });
  }

  getUser = async (username) =>{
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ user: res.data, loading: false });
  }

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ users: res.data, loading: false});
  // }

  // clear users
  clearUser = () => {
    this.setState({ users: [], loading: false });
  }

  //set alert if text is empty
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  }


  render() {

    const { users, user, loading, alert } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container app-height">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} clearUser={this.clearUser} showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert} />
                  <div className="row">
                    <Users users={users} loading={loading} />
                  </div>
                </Fragment>
              )} />

              <Route exact path="/about" component={About}/>
              <Route exact path="/user/:login" render={props =>(
                <User {...props} getUser={this.getUser} user={user} loading={loading}/>
              )}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}









