import React, { Component } from "react";
class ThongTinGame extends Component {
  state = {};
  render() {
    return (
      <div>
        <p className="text-center text-uppercase fs-2 fw-bold font-bold">
          Bạn Chọn: <span>1</span>
        </p>
        <p className="text-center text-uppercase fs-2 fw-bold font-bold">
          Bạn Thắng: <span>1</span>
        </p>
        <p className="text-center text-uppercase fs-2 fw-bold font-bold">
          Số Lần Chơi: <span>1</span>
        </p>
      </div>
    );
  }
}

export default ThongTinGame;
