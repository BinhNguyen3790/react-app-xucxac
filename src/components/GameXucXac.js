import React, { Component } from "react";
import XucXac from "./XucXac";
import ThongTinGame from "./ThongTinGame";
class GameXucXac extends Component {
  render() {
    return (
      <div>
        <h2>game xuc xac</h2>
        <div className="row">
          <div className="col-5">
            <button>Tài</button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          <div className="col-5">
            <button>Xỉu</button>
          </div>
        </div>
        <div class="row">
          <ThongTinGame />
          <button>Play game</button>
        </div>
      </div>
    );
  }
}

export default GameXucXac;
