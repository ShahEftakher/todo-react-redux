import { DELETE_TODO } from '../constants';

export const deleteReducer = (state = initialState, action) => {
  if (action.type === DELETE_TODO) {
    console.log('do something');
  }
  return state;
};
