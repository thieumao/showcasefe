export const UPDATE_ETS2020 = 'UPDATE_ETS2020';
export const updateETS2020Action = (key, value) => ({
  type: UPDATE_ETS2020,
  key,
  value,
});
export const updateAllETS2020Action = (value) => ({
  type: UPDATE_ETS2020,
  value,
});

export const UPDATE_PART = 'UPDATE_PART';
export const updatePartAction = (testName, partName, value) => ({
  type: UPDATE_PART,
  testName,
  partName,
  value,
});

export const SELECT_ANSWER = 'SELECT_ANSWER';
export const selectAnsweAction = (testName, partName, value) => ({
  type: SELECT_ANSWER,
  testName,
  partName,
  value,
});
