import { UPDATE_ETS2020, UPDATE_PART, UPDATE_DATA_ACTION, TEST_ACTION, INCREASE_ACTION } from '../actionTypes/actionType';
import { PERSIST_REHYDRATE } from 'redux-offline/lib/constants';

const defaultState = {
  number: 1,
  rehydrated: false,
};

export default function ets2020Reducer(state, action) {
  const currentState = state || defaultState;
  switch (action.type) {
    // case PERSIST_REHYDRATE: {
    //   console.log('>>>>>>> PERSIST_REHYDRATE');
    //   return {
    //     ...state,
    //     rehydrated: true
    //   };
    // }
    case UPDATE_DATA_ACTION: {
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
    case INCREASE_ACTION: {
      console.log('Vao roi >>>>>> ');
      console.log(action.value);
      if (action.key) {
        return {
          ...state,
          [action.key]: action.value + 1,
        };
      }
      return {
        ...state,
        ...action.value + 1,
      };
    }
    case TEST_ACTION: {
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
