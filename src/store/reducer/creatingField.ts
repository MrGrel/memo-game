import { ICreatingFields, TActionCreatingFields, allActionTypes } from '../../type/type';

const creatingField: ICreatingFields = {
  dificulty: 0,
  arrButtonsOfDificulty: [{
    name: 'baby',
    cardsNumberInRow: 2,
  },
  {
    name: 'easy',
    cardsNumberInRow: 4,
  },
  {
    name: 'medium',
    cardsNumberInRow: 6,
  },
  {
    name: 'hard',
    cardsNumberInRow: 8,
  },
  {
    name: 'god',
    cardsNumberInRow: 10,
  },],
  arrPreviewCards: [],
  arrCards: [],
  arrImg: [],
}

const creatingFieldReducer = (state:ICreatingFields = creatingField, action: TActionCreatingFields):ICreatingFields => {

  switch (action.type) {
    case allActionTypes.SET_DIFICULTY:
      return { ...state, dificulty: action.payload };

    case allActionTypes.VIEW_SET_CARDS:
      console.log('true')
      return { ...state, arrPreviewCards: action.payload };

    case allActionTypes.GAME_SET_CARDS:
      console.log('state >', state)
      return { ...state, arrCards: action.payload };

    case allActionTypes.NEW_GAME:
      return { ...state, arrPreviewCards: action.payload, arrCards: action.payload }

    case allActionTypes.GET_IMG:
      return { ...state, arrImg: action.payload }

    default:
      return state
  }
}

export default creatingFieldReducer



