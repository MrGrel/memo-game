import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import phaseOfGameReducer from "./reducer/phaseOfGame";
import creatingFieldReducer from "./reducer/creatingField";
import trackingRulesOfGameReducer from "./reducer/trackingRulesOfGame";
import { timerEndingReducer } from "./reducer/timerEnding";

const rootReducer = combineReducers({
    phaseOfGame: phaseOfGameReducer,
    creatingField: creatingFieldReducer,
    trackingRulesOfGame: trackingRulesOfGameReducer,
    timerEnding: timerEndingReducer
})

export type TRootState = ReturnType<typeof rootReducer>;


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;

