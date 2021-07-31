import React, { useReducer, useEffect } from 'react';

import LjohnsonContext from './ljohnsonContext';
import LjohnsonReducer from './ljohnsonReducer';

import {
  GET_CLIENT,
  SUBMIT_CLIENT,
  SUBMIT_ORDER_LOG,
  SUBMIT_MEASUREMENT,
  SUBMIT_MISC,
  SET_LOADING,
  SET_MODAL,
} from '../types';

const LjohnsonState = props => {
  const initialState = {
    clients: [],
    client: {},
    measurement: {},
    orderLogItem: {},
    orderLogMisc: {},
  };

  const [state, dispatch] = useReducer(LjohnsonReducer, initialState);

  // Get Clients
  const getClient = () => {
    setLoading();

    dispatch({
      type: GET_CLIENT,
      payload: state.clients,
    });
  };

  // subMit Client
  const submitClient = client => {
    setLoading();

    dispatch({
      type: SUBMIT_CLIENT,
      payload: client,
    });
  };

  // Submit Measurement
  const submitMeasurement = measurement => {
    setLoading();

    dispatch({
      type: SUBMIT_MEASUREMENT,
      payload: measurement,
    });
  };

  // Submit OrderLog Item
  const submitOrderLog = async orderLogItem => {
    setLoading();

    dispatch({
      type: SUBMIT_ORDER_LOG,
      payload: orderLogItem,
    });
  };

  // Submit Misc
  const submitMisc = misc => {
    setLoading();

    dispatch({
      type: SUBMIT_MISC,
      payload: misc,
    });
  };

  // Load Users
  useEffect(() => {
    setLoading();
    getClient();

    // eslint-disable-next-line
  }, []);

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // SET MODAL
  const setModal = () => dispatch({ type: SET_MODAL });

  return (
    <LjohnsonContext.Provider
      value={{
        clients: state.clients,
        client: state.client,
        measurement: state.measurement,
        orderLogItem: state.orderLogItem,
        orderLogMisc: state.orderLogMisc,
        loading: state.loading,
        modal: state.modal,
        getClient,
        submitClient,
        submitMeasurement,
        submitOrderLog,
        submitMisc,
        setModal,
      }}>
      {props.children}
    </LjohnsonContext.Provider>
  );
};

export default LjohnsonState;
