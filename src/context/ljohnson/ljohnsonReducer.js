import { SET_LOADING, GET_CUSTOMERS, GET_CUSTOMER } from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
