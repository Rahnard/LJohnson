import {
  GET_CLIENT,
  SET_MODAL,
  SUBMIT_CLIENT,
  SUBMIT_ORDER_LOG,
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_CLIENT:
      return {
        ...state,
        clients: action.payload,
        loading: false,
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
    case SUBMIT_ORDER_LOG:
      return {
        ...state,
        orderLogItem: action.payload,
      };
    default:
      return state;
  }
};
