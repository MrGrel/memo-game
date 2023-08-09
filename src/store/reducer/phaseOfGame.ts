import { IPhaseOfGame, TActionPhaseOfGame, allActionTypes } from "../../type/type";

let phaseOfGame: IPhaseOfGame = {
  startGame: false,
  loading: true,
}

const phaseOfGameReducer = (state = phaseOfGame, action: TActionPhaseOfGame): IPhaseOfGame => {
  switch (action.type) {
    case allActionTypes.START_GAME:
      return { ...state, startGame: true };
    case allActionTypes.NEW_GAME:
      return { ...state, startGame: false }
    case allActionTypes.GET_IMG:
      return { ...state, loading: false }

    default:
      return state

  }
}

export default phaseOfGameReducer