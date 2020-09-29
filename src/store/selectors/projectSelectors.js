import { createSelector } from 'reselect';

export const getNumber = state => state.data.number || 0;
export const getRehydrated = state => state.data.rehydrated || false;

export const getCaseStudyList = state => state.data.CaseStudyList || [];
export const getEPIList = state => state.data.EPIList || [];