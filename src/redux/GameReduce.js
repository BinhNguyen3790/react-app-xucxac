const stateDefault = {
  taiXiu: true,
  mangXucXac: [
    { id: 1, img: "./assets/imgs/1.png" },
    { id: 1, img: "./assets/imgs/1.png" },
    { id: 1, img: "./assets/imgs/1.png" },
  ],
  soBanThang: 0,
  luotChoi: 0,
};

const GameReduce = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      {
        state.taiXiu = action.taiXiu;
        return { ...state };
      }
      break;
    default:
      return { ...state };
  }
};

export default GameReduce;
