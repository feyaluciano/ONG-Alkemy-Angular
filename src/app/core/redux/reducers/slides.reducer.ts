import { Action, createReducer, on } from '@ngrx/store';
import { Slide } from 'src/app/features/public/models/slide';
import { setSlideListState } from '../actions/slides.actions';


  export interface SlideListState{
    slideList:Slide[] | null;
  }

  export const initialState:SlideListState = {
    slideList:null
  };


export const _slideReducer = createReducer(
  initialState,
  on(setSlideListState, (state, setSlideListState) => ({
     ...state,
      slideList:  setSlideListState.slidesList
  })),
);

export function slideReducer(state= initialState, action: Action){
  return _slideReducer(state,action);
}
