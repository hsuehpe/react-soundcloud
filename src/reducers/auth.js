import * as actionTypes from '../constants/ActionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ME_SET:
      return setMe(state, action);
    default:
  }
  return state;
}

function setMe(state, action) {
  const { user } = action;
  return { ...state, user };
}