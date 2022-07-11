import React from "react";
import reactDOM from "react-dom";
import Overview from './components/Overview/Overview.jsx';
import Questions from './components/Questions/Questions.jsx';
import Reviews from './components/Review/ReviewWidget.jsx';
import Similar from './components/Similar/Similar.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Overview/>
        <Questions/>
        <Reviews/>
        <Similar/>
      </div>
    )
  }
}


reactDOM.render(<App />, document.getElementById("app"));
