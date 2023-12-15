import { createSelector } from 'reselect';

const stateSelector = (state) => state['pros'] || [];

export const selectProsValues = createSelector(stateSelector, (pros) => pros);