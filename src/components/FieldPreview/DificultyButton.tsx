import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ICard, IDificultyButton } from '../../type/type';

const DificultyButton = ({name, cardsNumberInRow }: IDificultyButton) => {

  const dispatch = useDispatch();
  const arrImg = useTypeSelector(state => state.creatingField.arrImg);

// перешивание массива чтобы карточки не шли все подряд
  const shuffle = (arr: ICard[]) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  const getNewId = (arr: ICard[]) => {
    let idItem: number = 100;

    for (let i = 0; i < arr.length; ++i) {
      if (arr[i].id > idItem) {
        idItem = arr[i].id;
      }
    };

    return idItem + 1;
  };

  const handleSetDifficltyButtonClick = () => {

    let cards: ICard[] = [];
    let viewCards: ICard[] = [];

    dispatch({ type: 'SET_DIFICULTY', payload: cardsNumberInRow });

    // Цикл по карточкам для предпросмотра поля
    for (let i = 0; i < cardsNumberInRow * 2 - 1; ++i) {
      const card: ICard = {
        id: getNewId(viewCards),
        dificulty: name,
        cardNumber: i,
        img: ''
      }
      viewCards.push(card);
    };

    // Цикл по карточкам для начала игры
    for (let i = 1; i < cardsNumberInRow ** 2; ++i) {
      const card:ICard = {
        id: getNewId(cards),
        dificulty: name,
        cardNumber: i,
        img: arrImg[i - 1]
      };
      // Чтобы у карточек была своя пара с новым id сбрасываем счетчик
      if (i === cardsNumberInRow ** 2 / 2) {
        i = 0;
      };
      // Ограничение слияния с беснонечно-вечным
      if (cards.length === cardsNumberInRow ** 2) {
        break;
      };

      cards.push(card);
    }

    dispatch({ type: 'VIEW_SET_CARDS', payload: viewCards });
    dispatch({ type: 'GAME_SET_CARDS', payload: shuffle(cards)});
  }

  return (
    <>
      <button onClick={handleSetDifficltyButtonClick} className={'dificult__btn'}>{`${name}`}</button>
    </>
  )
}

export default DificultyButton;