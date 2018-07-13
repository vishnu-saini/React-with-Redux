import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from '../../logo.svg';
import '../App.css';
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { Footer } from "../components/Footer";
import { addUser } from "../actions/userActions";
import { countUp } from "../actions/counterActions";
import { countDown } from "../actions/counterActions";

class App extends Component {
  render() {
    var menuItems = ["Home","Contacts","Practice Demos"];
    return (
      <div className="App">
        <Header webSiteName="React Practice" menuItems={menuItems}/>
        <MainContent tableTitle={"User Profiles"} result={this.props.counter.result} countUp={this.props.countUp} countDown={this.props.countDown} users={this.props.user} addUser={this.props.addUser}/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.user,
    counter : state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (userName) => {
      dispatch(addUser(userName))
    },
    countUp: () => {
      dispatch(countUp())
    },
    countDown:() => {
      dispatch(countDown())
    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(App);

