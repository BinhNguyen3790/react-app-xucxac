import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return <img key={index} src={xucXac.img} alt="" />;
    });
  };
  render() {
    return <div className="d-flex justify-content-between">{this.renderXucXac()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.GameReduce.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
