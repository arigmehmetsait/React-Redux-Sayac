import React, { Component } from "react";
import { increaseByTwoCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increaseByTwoCounter}>2 artır</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseByTwoCounter: bindActionCreators(increaseByTwoCounter, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(IncreaseByTwoCounter);
