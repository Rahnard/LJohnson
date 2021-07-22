import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import LjohnsonContext from './ljohnsonContext';
import LjohnsonReducer from './ljohnsonReducer';

import { SET_LOADING, GET_CUSTOMER, GET_CUSTOMERS } from '../types';

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
    customers: [
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
      {
        name: 'Aliyu Gambia Sanusi',
        email: 'email@mail.me',
        phone: 818673673,
        customerId: Math.random() * 1000,
        dateTaken: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      },
    ],
    loading: false,
  };

  const [state, dispatch] = useReducer(LjohnsonReducer, initialState);

  // Search Users
  const getCustomers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    dispatch({
      type: GET_CUSTOMERS,
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
        type: GET_CUSTOMERS,
        payload: res.data,
      });
    };
    func();
  }, []);

  // Get Customer
  const getCustomer = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    dispatch({
      type: GET_CUSTOMER,
      payload: res.data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <LjohnsonContext.Provider
      value={{
        customers: state.customers,
        loading: state.loading,
        getCustomers,
      }}>
      {props.children}
    </LjohnsonContext.Provider>
  );
};

export default LjohnsonState;
