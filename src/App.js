import React, {Component} from 'react'
import './App.css';
import arrow from './assets/images/arrow.svg'
import Header from './Navbar';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import LinearSearch from './LinearSearch';
import BinarySearch from './BinarySearch';



class App extends Component{

  render(){
    return(
      <>
        <Router>
        <Header />
          <Switch>
              <Route exact path='/linear-search' component={LinearSearch} />
              <Route exact path='/binary-search' component={BinarySearch} />
              <Redirect to='/linear-search' />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
