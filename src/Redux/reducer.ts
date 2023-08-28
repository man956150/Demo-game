import {
  ADD_WINNER,
  INCREASE_VALUE,
  CALCULATE_DIFFERENCE,
  COMPARE_WINNERS,
  ActionTypes,
} from './actions';

interface State {
  winners: string[];
  values: number[];
  difference: number;
  comparisonResult: string;
}

const initialState = {
  winners: [],
  values: [0, 0],
  difference: 0,
  comparisonResult: '',
};

const reducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case ADD_WINNER:
      return {
        ...state,
        winners: action.payload,
      };
    case INCREASE_VALUE:
      return {
        ...state,
        values: state.values.map((value, index) =>
          index === action.payload ? value + 1 : value
        ),
      };
    case CALCULATE_DIFFERENCE:
      const difference = Math.abs(state.values[0] - state.values[1]);
      return {
        ...state,
        difference,
      };
    case COMPARE_WINNERS:
      let comparisonResult = '';
      if (state.values[0] > state.values[1]) {
        comparisonResult = `${state.winners[0]}`;
      } else if (state.values[0] < state.values[1]) {
        comparisonResult = `${state.winners[1]}`;
      } else {
        comparisonResult = 'Both winners';
      }
      return {
        ...state,
        comparisonResult,
      };
    default:
      return state;
  }
};

export default reducer;
