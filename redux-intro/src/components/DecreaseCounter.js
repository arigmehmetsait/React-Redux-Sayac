import React, { Component } from "react";
import { decreaseCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decreaseCounter}>1 azalt</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    decreaseCounter: bindActionCreators(decreaseCounter, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(DecreaseCounter);
