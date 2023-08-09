import { TActionTimerEnding, allActionTypes } from "../../type/type";

const timerEnding: boolean = false;

export const timerEndingReducer = (state = timerEnding, action: TActionTimerEnding): boolean => {
  switch (action.type) {
    case allActionTypes.END_GAME:
      return true;
    case allActionTypes.NEW_GAME:
      return false;
    default:
      return state;
  }
}