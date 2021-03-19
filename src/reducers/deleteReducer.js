import { DELETE_TODO } from '../constants';

export const deleteReducer = (state, action) => {
  console.log(state);
  if (action.type === DELETE_TODO) {
    console.log('fml');
  }
  return state;
};
