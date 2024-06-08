import React, { Component } from "react";
import XucXac from "./XucXac";
import ThongTinGame from "./ThongTinGame";
import "./GameXucXac.css";
import { connect } from "react-redux";
class GameXucXac extends Component {
  render() {
    return (
      <div className="main container-fluid py-5">
        <h2 className="text-center text-uppercase fs-1 fw-bold font-bold mb-5">game xuc xac</h2>
        <div className="container">
          <div className="row mb-5">
            <div className="col-3 d-flex justify-content-center align-items-center align-items-start">
              <button
                onClick={() => {
                  this.props.datCuoc(true);
                }}
                className="btn btn-primary btn-rounder p-5 fs-2"
              >
                Tài
              </button>
            </div>
            <div className="col-6">
              <XucXac />
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center align-items-start">
              <button
                onClick={() => {
                  this.props.datCuoc(false);
                }}
                className="btn btn-primary btn-rounder p-5 fs-2"
              >
                Xỉu
              </button>
            </div>
          </div>
          <div className="row">
            <ThongTinGame />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-success btn-rounder py-3 px-5 fs-2 mt-3"
            >
              Play game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
    playGame: () => {
      dispatch({
        type: "PLAY_GAME"
      })
    },
  };
};

export default connect(null, mapDispatchToProps)(GameXucXac);
