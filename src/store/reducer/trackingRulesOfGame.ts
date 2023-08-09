import { ITrackingRulesOfGame, TActionTrackingRulesOfGame, allActionTypes } from "../../type/type"

const trackingRulesOfGame: ITrackingRulesOfGame = {
  openedCards: [],
  successedCards: [],
  cardNumbers: [],
}

const trackingRulesOfGameReducer = (state: ITrackingRulesOfGame = trackingRulesOfGame, action: TActionTrackingRulesOfGame): ITrackingRulesOfGame => {

  const openedCards = state.openedCards;
  const cardNumbers = state.cardNumbers;

  switch (action.type) {
    case allActionTypes.SUCCESSED_PAIR:
      // Проверяем массив на наличие пары
      if (cardNumbers.length === 2) {
        const firstOpenedCard = cardNumbers[0];
        const secondOpenedCard = cardNumbers[1];
        // Проверяем равны ли эти пары
        if (firstOpenedCard === secondOpenedCard) {
          return { ...state, successedCards: [...state.successedCards, firstOpenedCard, secondOpenedCard] }
        }
      }
      return state;
    case allActionTypes.SET_OPENED_CARD:
      // Чтобы не было больше двух открытых карточек, удаляем их из массива
   
      if (openedCards.length === 2) {
        openedCards.splice(0, 2);
        cardNumbers.splice(0, 2);
      }
      return { ...state, openedCards: [...openedCards, action.id], cardNumbers: [...cardNumbers, action.cardNumber ] }
    case allActionTypes.NEW_GAME:
      return { ...state, openedCards: action.payload, successedCards: action.payload, cardNumbers: action.payload }
    default:
      return state
  }
}
export default trackingRulesOfGameReducer

