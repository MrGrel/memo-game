import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "./hooks/useTypeSelector";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import getImg from "./store/asyncActions/fetchImg";
import FieldPreview from "./components/FieldPreview/FieldPreview";
import StartGame from "./components/StartGame/StartGame";

export default function App() {

  const startGame = useTypeSelector(state => state.phaseOfGame.startGame);
  const loading = useTypeSelector(state => state.phaseOfGame.loading);
  const divRef  = useRef(null);
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(getImg());
  }, [divRef])

  return (
    <>
      {loading &&
        <div ref={divRef} id="spinner" className="spinner__container">
          <div className="spinner">
            <div className="spinner-grow text-warning spinner__block" role="status"></div>
            <span className="text-warning">Одну минутку идет загрузка</span>
          </div>
        </div>}
      {!loading &&
        <div className="game__container">
          {!startGame && <FieldPreview />}
          {startGame && <StartGame />}
        </div>}
    </>

  );
}


