import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <div key={index} style={{ width: "33.3%" }}>
          <img src={xucXac.img} alt="" style={{ width: "100%" }} />
        </div>
      );
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
