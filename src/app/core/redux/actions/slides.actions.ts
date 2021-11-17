import { createAction, props } from '@ngrx/store';
import { Slide } from 'src/app/features/public/models/slide';

export const getSlideList = createAction('[Slide List] List Slide');    
export const setSlideListState = createAction('[ User ] Find All Slide Success', props<{ slidesList:Slide[] }>());
