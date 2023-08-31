import React, { Component } from "react";
import { increaseCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increaseCounter}>1 artır</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: bindActionCreators(increaseCounter, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(IncreaseCounter);
