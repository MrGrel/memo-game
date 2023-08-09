import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import CreateTimer from "./timer";
import Card from "../Card";
import BtnReset from "./BtnReset";
import { ICard } from "../../type/type";


// Функция для старта игры и генерации поля карточек
const StartGame = () => {

  const arrCards: ICard[] = useTypeSelector(state => state.creatingField.arrCards);
  const openedCards: number[] = useTypeSelector(state => state.trackingRulesOfGame.openedCards);
  const successedCards: number[] = useTypeSelector(state => state.trackingRulesOfGame.successedCards);
  const dificulty: number = useTypeSelector(state => state.creatingField.dificulty);
  const timerEnding: boolean = useTypeSelector(state => state.timerEnding);
  // const cardsRef = useRef([]);
  const dispatch = useDispatch()

  if (successedCards.length === dificulty ** 2) {
    dispatch({ type: 'END_GAME' });
  }

  const cardGroupClass = () => {
    let groupClass = 'card__group-baby'
    switch (dificulty) {
      case 2:
        return groupClass = 'card__group-baby';
      case 4:
        return groupClass = 'card__group-easy';
      case 6:
        return groupClass = 'card__group-medium';
      case 8:
        return groupClass = 'card__group-hard';
      case 10:
        return groupClass = 'card__group-god';
      default:
        return groupClass;
    }
  }

  const updateStatusCards = useMemo(() => {

    const statusCards: JSX.Element[] = [];
    arrCards.forEach((card) => {
      
      statusCards.push(
        <Card
          card={card}
          opened={openedCards.includes(card.id)}
          successed={timerEnding ? timerEnding : successedCards.includes(card.cardNumber)}
          key={card.id}
        />
      )
    });
    return statusCards;
  }, [openedCards, successedCards]);

  return (
    <>
      <CreateTimer />

      <div className={cardGroupClass()}>
        {updateStatusCards}
      </div>

      {timerEnding && <BtnReset />}
    </>
  )
}

export default StartGame;