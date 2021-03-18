import React, {useState, Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

const App = () => {

  const [users, setUsers] = useState([]);
  const [users, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   this.setState({loading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   //console.log(res.data);

  //   this.setState({users: res.data, loading: false});
  // }

  

  //getting single github user
  const getUser = async (username) => {
    setLoading(true);
    
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    //console.log(res.data);

    setUser(res.data);
    setLoading(false);
  }

  //get users repos
  const getUserRepos = async (username) => {
    setLoading(true);
    
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    //console.log(res.data);

    setRepos(res.data);
    setLoading(false);
  }

  //clear user from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  const showAlert = (msg, type) => {
    setAlert({msg:msg, type:type});
    setTimeout(() => setAlert(null), 2100);
  }

    return (
      <GithubState>
      <Router>
      <div className="App">
        <Navbar title="Github Profile Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true:false} setAlert={showAlert}/>
                <Users loading={loading} users={users}/>
              </Fragment>
            )}></Route>

            <Route exact path='/about' component={About} />

            <Route exact path='/user/:login' render={props => (
              <User {...props} getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading}/>
            )}/>
          </Switch>
          
        </div>
      </div>
      </Router>
      </GithubState>
    );
 
}

export default App;
