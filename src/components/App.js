import React from "react";
import "../stylesheets/main.scss";
import '../../node_modules/antd/dist/antd.css';
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// app component
export default class App extends React.Component {

  componentWillMount() {
    injectTapEventPlugin();
  }

  // render
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
