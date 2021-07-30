import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import LjohnsonContext from './ljohnsonContext';
import LjohnsonReducer from './ljohnsonReducer';

import {
  SET_LOADING,
  GET_CLIENTS,
  GET_CLIENT,
  TOGGLE_MEASUREMENT,
  SET_MODAL,
  SUBMIT_CLIENT,
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const LjohnsonState = props => {
  const initialState = {
    clients: [
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        clientId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
        address: 'AG 460 Karu, Abuja',
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        clientId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
        address: 'AG 460 Karu, Abuja',
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        clientId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
        address: 'AG 460 Karu, Abuja',
      },
    ],
    client: null,
    loading: false,
    modal: false,
  };

  const [state, dispatch] = useReducer(LjohnsonReducer, initialState);

  // Get Clients
  const getClients = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    dispatch({
      type: GET_CLIENTS,
      payload: res.data.items,
    });
  };

  // Get Client
  const getClient = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    dispatch({
      type: GET_CLIENT,
      payload: res.data.items,
    });
  };

  // subMit Client
  const submitClient = client => {
    setLoading();

    dispatch({
      type: SUBMIT_CLIENT,
      payload: client,
    });
    console.log(client);
  };

  // Load Users
  useEffect(() => {
    setLoading();

    const func = async () => {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
      );
      dispatch({
        type: GET_CLIENTS,
        payload: res.data,
      });
    };
    func();
  }, []);

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // TOGGLE TOP TROUSER
  const toggleTopTrouser = () => dispatch({ type: TOGGLE_MEASUREMENT });

  // SET MODAL
  const setModal = () => dispatch({ type: SET_MODAL });

  return (
    <LjohnsonContext.Provider
      value={{
        clients: state.clients,
        client: state.client,
        loading: state.loading,
        modal: state.modal,
        topTrouser: state.topTrouser,
        getClients,
        toggleTopTrouser,
        setModal,
        submitClient,
      }}>
      {props.children}
    </LjohnsonContext.Provider>
  );
};

export default LjohnsonState;
