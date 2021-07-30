import {
  SET_LOADING,
  GET_CUSTOMERS,
  GET_CUSTOMER,
  GET_CLIENT,
  GET_CLIENTS,
  TOGGLE_MEASUREMENT,
  SET_MODAL,
  SUBMIT_CLIENT,
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
    case SET_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    case SUBMIT_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    default:
      return state;
  }
};
