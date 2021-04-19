import React, {useState, Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/github/AlertState';

const App = () => {

  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   this.setState({loading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   //console.log(res.data);

  //   this.setState({users: res.data, loading: false});
  // }


  const showAlert = (msg, type) => {
    setAlert({msg:msg, type:type});
    setTimeout(() => setAlert(null), 2100);
  }

    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className="App">
        <Navbar title="Github Profile Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search setAlert={showAlert}/>
                <Users/>
              </Fragment>
            )}></Route>

            <Route exact path='/about' component={About} />

            <Route exact path='/user/:login' component={User} />
          </Switch>
          
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
 
}

export default App;
