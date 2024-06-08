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
    case "PLAY_GAME":
      {
        let newMangXucXac = [];
        for (let i = 0; i < 3; i++) {
          let randomNumber = Math.floor(Math.random() * 6) + 1;
          let randomXucXac = { id: randomNumber, img: `./assets/imgs/${randomNumber}.png` };
          newMangXucXac.push(randomXucXac);
        }
        state.mangXucXac = newMangXucXac;
        state.luotChoi += 1;
        let tongDiem = newMangXucXac.reduce((tongDiem, xucxac, index) => {
          return (tongDiem += xucxac.id);
        }, 0);
        if ((tongDiem > 11 && state.taiXiu === true) || (tongDiem < 11 && state.taiXiu === false)) {
          state.soBanThang += 1;
        }
        return { ...state };
      }
      break;
    default:
      return { ...state };
  }
};

export default GameReduce;
