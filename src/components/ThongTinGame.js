import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinGame extends Component {
  state = {};
  render() {
    return (
      <div>
        <p className="text-center text-uppercase fs-2 fw-bold font-bold">
          Bạn Chọn: <span className="text-danger">{this.props.taiXiu ? "Tai" : "Xiu"}</span>
        </p>
        <p className="text-center text-uppercase fs-2 fw-bold font-bold">
          Bạn Thắng: <span className="text-success">{this.props.soBanThang}</span>
        </p>
        <p className="text-center text-uppercase fs-2 fw-bold font-bold">
          Số Lần Chơi: <span className="text-success">{this.props.luotChoi}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.GameReduce.soBanThang,
    luotChoi: state.GameReduce.luotChoi,
    taiXiu: state.GameReduce.taiXiu,
  };
};

export default connect(mapStateToProps)(ThongTinGame);
