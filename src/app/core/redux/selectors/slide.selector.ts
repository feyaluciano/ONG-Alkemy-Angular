import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SlideListState } from "../reducers/slides.reducer";
export const getSlideState = createFeatureSelector<SlideListState>('slideReducer');
export const getSlide = createSelector(
    getSlideState,
    (state:SlideListState) => state.slideList
);  