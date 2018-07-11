import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

class App extends Component {
  render() {
    var menuItems = ["Home","Contacts","Practice Demos"];
    return (
      <div className="App">
        <Header webSiteName="React Practice" menuItems={menuItems}/>

        <MainContent tableTitle={"User Profiles"} userCount={1} users={this.props.user}/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.user,
    math : state.math
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch ({
        type: "ADD_USER",
        payload: user
      })
    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(App);

