import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from '../../hooks/useTypeSelector';

const DIFFICULTY_MULTIPLIER = 30;

export default function Timer() {

  const dificulty: number = useTypeSelector(state => state.creatingField.dificulty);
  const timerEnding: boolean = useTypeSelector(state => state.timerEnding);
  const [timer, setTimer] = useState(DIFFICULTY_MULTIPLIER * dificulty);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timerEnding) {
      return 
    }

    const startTimer = setTimeout(() => {
      if (timer > 0) {
        setTimer((state) => state - 1);
        if (timer === 1) {
          setTimer(0);
          clearInterval(startTimer);
          dispatch({ type: 'END_GAME' });
        }
      }
    }, 1000);
    
    return () => clearInterval(startTimer);
    // 
  }, [timer, timerEnding])

  return (
    <div className="timer__container">
      <div className="timer">
        {timer}
      </div>
    </div>
  )
}