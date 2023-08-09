export interface ICreatingFields {
  dificulty: number,
  arrButtonsOfDificulty: IDificultyButton[],
  arrPreviewCards: ICard[],
  arrCards: ICard[],
  arrImg: string[],
}

export interface IPhaseOfGame {
  startGame: boolean,
  loading: boolean,
};

export interface ITrackingRulesOfGame {
  openedCards: number[],
  successedCards: number[],
  cardNumbers: number[],
};

export interface IDificultyButton {
  name: string,
  cardsNumberInRow: number,
};

export interface ICard {
  id: number,
  dificulty: string,
  cardNumber: number,
  img: string,
};

export enum allActionTypes {
  SET_DIFICULTY = 'SET_DIFICULTY',
  VIEW_SET_CARDS = 'VIEW_SET_CARDS',
  GAME_SET_CARDS = 'GAME_SET_CARDS',
  GET_IMG = 'GET_IMG',
  START_GAME = 'START_GAME',
  END_GAME = 'END_GAME',
  NEW_GAME = 'NEW_GAME',
  SET_OPENED_CARD = 'SET_OPENED_CARD',
  SUCCESSED_PAIR = 'SUCCESSED_PAIR',
};

interface IDificulty {
  type: allActionTypes.SET_DIFICULTY,
  payload: number
}

interface IViewSetCards {
  type: allActionTypes.VIEW_SET_CARDS,
  payload: ICard[]
}

interface IGameSetCards {
  type: allActionTypes.GAME_SET_CARDS,
  payload: ICard[]
}

interface IGetImg {
  type: allActionTypes.GET_IMG,
  payload: string[]
}

interface IStartGame {
  type: allActionTypes.START_GAME,
}

interface IEndGame {
  type: allActionTypes.END_GAME,
}

interface INewGame {
  type: allActionTypes.NEW_GAME,
  payload: []
}

interface ISetOpenedCard {
  type: allActionTypes.SET_OPENED_CARD,
  id: number,
  cardNumber: number,
}

interface ISetSuccessedPair {
  type: allActionTypes.SUCCESSED_PAIR,
}

export type TActionCreatingFields = IDificulty | IViewSetCards | IGameSetCards | ISetOpenedCard | ISetSuccessedPair | INewGame | IGetImg;
export type TActionPhaseOfGame = IStartGame | INewGame | IGetImg;
export type TActionTrackingRulesOfGame = ISetOpenedCard | ISetSuccessedPair | INewGame;
export type TActionTimerEnding = IEndGame | INewGame

