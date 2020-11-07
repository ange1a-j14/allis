import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import banner from './img/stanford.png';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import reportWebVitals from './reportWebVitals';

class Header extends React.Component {
   grid() {
    return (
      <AppBar position="fixed">
        <Toolbar color="red">
          <Button className="home-button"> Stan4d </Button>
          <h3> Welcome to Stan4d </h3>
        </Toolbar>
      </AppBar>
    )
  }


  render() {
    return (
      <>
        <div className="banner">
          <div className="banner-box">
            {this.grid()}
          </div>
        </div>
      </>
    )
  }
}

// ===========================================
ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
