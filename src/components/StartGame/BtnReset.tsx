import React from "react";
import { useDispatch } from "react-redux";


const BtnReset = () => {

  const dispatch = useDispatch()

  const handleClickBtnReset = () => {
    dispatch({ type: 'NEW_GAME', payload: [] })
  }

  return (
    <div className="restart__container">
      <button className="restart__btn" onClick={handleClickBtnReset}>Начать заново</button>
    </div>
  )
}
export default BtnReset;