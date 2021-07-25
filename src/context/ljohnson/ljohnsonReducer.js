import {
  SET_LOADING,
  GET_CUSTOMERS,
  GET_CUSTOMER,
  GET_CLIENT,
  GET_CLIENTS,
  TOGGLE_MEASUREMENT,
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case TOGGLE_MEASUREMENT:
      return {
        ...state,
        topTrouser: !state.topTrouser,
      };
    default:
      return state;
  }
};
