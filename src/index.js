import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import banner from './img/stanford.png';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
//import reportWebVitals from './reportWebVitals';

class Header extends React.Component {
   grid() {
    return (
      <Grid>
        <Grid item xs={2}>
          <button className="home-button"> Stan4d </button>
        </Grid>
        <Grid item xs={2}>
          <h3> Welcome to Stan4d </h3>
        </Grid>
      </Grid>
    )
  }


  render() {
    return (
      <>
        <div className="banner">
          <div className="banner-box">

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
