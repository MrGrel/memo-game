import React, { useRef, useMemo } from 'react';
import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { ICreateCard } from '../type/typeProps';
import { ICard } from '../type/type';

const Card = ({ card, opened, successed }: ICreateCard) => {

  const [classSizeCard, setClassSizeCard] = useState<string>('card__baby');
  const [classStatusCard, setClassStatusCard] = useState<string>('card__cover');
  const [open, setOpen] = useState(opened);
  const dispatch = useDispatch();

  // console.log(card.id);
  // console.log(opened);
  // console.log(successed);
  
  // Изменение размера карточки в зависимости от сложности
  useMemo(() => {
    setClassSizeCard(`card__${card.dificulty}`);
  }, [card.dificulty]);

  // Изменение статуса карточки
  useMemo(() => {
      if (opened) {
        setClassStatusCard('card__open');
        setOpen(true);
      };
      if (successed) {
        setClassStatusCard('card__success');
        setOpen(false);
      };
      if (!opened && !successed) {
        setClassStatusCard('card__cover');
        setOpen(false);
      };
    },[opened, successed]);

  const handleClickSetCard = () => {
    // Проверка на двойное нажатие
    if (opened) {
      throw new TypeError('Вы уже открыли эту карту');
    };
    dispatch({ type: 'SET_OPENED_CARD', id: card.id, cardNumber: card.cardNumber });
    dispatch({ type: 'SUCCESSED_PAIR' });
  }

  return (
    <>
      <button id={`${card.id}`} className={classSizeCard + ' ' + classStatusCard} onClick={handleClickSetCard} disabled={successed}>
        {open ? (card.img === '' ?
          <p>{`${card.cardNumber}`}</p>
          :
          <img src={card.img} alt='картинка' className='card__img'></img>)
          :
          null
        }
      </button>
    </>
  )
}

export default Card;