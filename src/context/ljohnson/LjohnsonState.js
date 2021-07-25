import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import LjohnsonContext from './ljohnsonContext';
import LjohnsonReducer from './ljohnsonReducer';

import {
  SET_LOADING,
  GET_CLIENTS,
  GET_CLIENT,
  TOGGLE_MEASUREMENT,
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
    client: [
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        clientId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
        address: 'AG 460 Karu, Abuja',
        measument: {
          N: 21,
          SH: 40,
          AH: 52,
          AL: 20,
          RA: 29,
          Wr: 33,
          CH: 21,
          HCH: 40,
          HBK: 52,
          AB: 20,
          BL: 29,
          H: 33,
        },
      },
    ],
    topTrouser: false,
    loading: false,
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

  return (
    <LjohnsonContext.Provider
      value={{
        clients: state.clients,
        client: state.client,
        loading: state.loading,
        topTrouser: state.topTrouser,
        getClients,
        toggleTopTrouser,
      }}>
      {props.children}
    </LjohnsonContext.Provider>
  );
};

export default LjohnsonState;
