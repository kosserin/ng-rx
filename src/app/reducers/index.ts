import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { counterReducer } from '../store/counter.reducer';
import { booksReducer } from '../state/books.reducer';
import { collectionReducer } from '../state/collection.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  count: counterReducer,
  books: booksReducer,
  collection: collectionReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
