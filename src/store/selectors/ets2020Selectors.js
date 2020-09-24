import { createSelector } from 'reselect';

export const getETS2020 = state => state.ets2020;

export const getTest1 = state => state.ets2020.test1;
export const getTest2 = state => state.ets2020.test2;
export const getTest3 = state => state.ets2020.test3;
export const getTest4 = state => state.ets2020.test4;
export const getTest5 = state => state.ets2020.test5;
export const getTest6 = state => state.ets2020.test6;
export const getTest7 = state => state.ets2020.test7;
export const getTest8 = state => state.ets2020.test8;
export const getTest9 = state => state.ets2020.test9;
export const getTest10 = state => state.ets2020.test10;

export const getPart = (testName, partName) => {
    return createSelector(
        getETS2020,
        ets2020 => {
            const test = ets2020[testName];
            const part = test[partName];
            return part;
        }
    );
};
