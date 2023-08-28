export const ADD_WINNER = 'ADD_WINNER';
export const INCREASE_VALUE = 'INCREASE_VALUE';
export const CALCULATE_DIFFERENCE = 'CALCULATE_DIFFERENCE';
export const COMPARE_WINNERS = 'COMPARE_WINNERS';

interface AddWinnerAction {
  type: typeof ADD_WINNER;
  payload: string[];
}

interface IncreaseValueAction {
  type: typeof INCREASE_VALUE;
  payload: number;
}

interface CalculateDifferenceAction {
  type: typeof CALCULATE_DIFFERENCE;
}

interface CompareWinnersAction {
  type: typeof COMPARE_WINNERS;
}

export type ActionTypes =
  | AddWinnerAction
  | IncreaseValueAction
  | CalculateDifferenceAction
  | CompareWinnersAction;

export const addWinner = (name: string[]): ActionTypes => ({
  type: ADD_WINNER,
  payload: name,
});

export const increaseValue = (winnerIndex: number): ActionTypes => ({
  type: INCREASE_VALUE,
  payload: winnerIndex,
});

export const calculateDifference = (): ActionTypes => ({
  type: CALCULATE_DIFFERENCE,
});

export const compareWinners = (): ActionTypes => ({
  type: COMPARE_WINNERS,
});
