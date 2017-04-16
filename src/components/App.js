import React from "react";
import "../stylesheets/main.scss";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


// app component
export default class App extends React.Component {

  componentWillMount() {
    injectTapEventPlugin();
  }

  // render
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="container">
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
