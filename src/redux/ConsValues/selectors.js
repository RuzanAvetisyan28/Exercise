import { createSelector } from 'reselect';

const stateSelector = (state) => state['cons'] || [];

export const selectConsValues = createSelector(stateSelector, (cons) => cons);