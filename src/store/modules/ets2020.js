import { UPDATE_ETS2020, UPDATE_PART } from '../actionTypes/ets2020ActionType';

const defaultState = {};

export default function ets2020Reducer(state, action) {
  const currentState = state || defaultState;
  switch (action.type) {
    case UPDATE_ETS2020: {
      if (action.key) {
        return {
          ...state,
          [action.key]: action.value,
        };
      }
      return {
        ...state,
        ...action.value,
      };
    }
    case UPDATE_PART: {
      const value = action.value;
      return {
        ...state,
        [action.testName]: {
          ...state[action.testName],
          [action.partName]: value,
        },
      };
    }
    default:
      return currentState;
  }
}
