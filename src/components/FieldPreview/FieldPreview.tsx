import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ICard, IDificultyButton } from "../../type/type";
import Card from "../Card";
import DificultyButton from "./DificultyButton";


const FieldPreview = () => {

  const arrViewCards: ICard[] = useTypeSelector(state => state.creatingField.arrPreviewCards);
  const arrDificultName: IDificultyButton[] = useTypeSelector(state => state.creatingField.arrButtonsOfDificulty);
  const dispatch = useDispatch();

  let handleClickButtonStartGame = () => {
    if (!arrViewCards.length) throw new TypeError('Вы не выбрали сложность')
    dispatch({ type: 'START_GAME' });
  }

  const { cardRowArray, cardColumnArray } = useMemo(() => {
    if (!arrViewCards) {
      return {
        cardRowArray: [],
        cardColumnArray: [],
      };
    }
    const cardRowArray: JSX.Element[] = [];
    const cardColumnArray: JSX.Element[] = [];

    arrViewCards.forEach((card, index) => {
      if (index % 2 === 0) {
        cardRowArray.push(<Card
          card={card}
          opened={false}
          successed={true}
          key={card.id} />);
      } else {
        cardColumnArray.push(<Card
          card={card}
          opened={false}
          successed={true}
          key={card.id} />);
      }
    })

    return {cardRowArray, cardColumnArray}
  },  [arrViewCards]);



return (
  <>
    <div className="game__btn-group">
      <div className="dificult__group">
        {arrDificultName.map((elem, index) => (
          <DificultyButton
            name={elem.name}
            cardsNumberInRow={elem.cardsNumberInRow}
            key={index}
          />
        ))}
      </div>
      <button className="game__btn-start" onClick={handleClickButtonStartGame}>Начать игру</button>
    </div>
    <div className="game__view">
      <div className="view__horisontal">
        {cardRowArray}
      </div>
      <div className="view__vertical">
        {cardColumnArray}
      </div>
    </div>
  </>
)
}

export default FieldPreview;