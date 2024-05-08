import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFeature = createFeatureSelector<number>('count');

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: number) => state
);
