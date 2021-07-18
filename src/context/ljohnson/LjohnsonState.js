import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import LjohnsonContext from './ljohnsonContext';
import LjohnsonReducer from './ljohnsonReducer';

import {
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_USERS,
  GET_REPOS,
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
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(LjohnsonReducer, initialState);

  // Search Users
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    dispatch({
      type: SEARCH_USERS,
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
        type: GET_USERS,
        payload: res.data,
      });
    };
    func();
  }, []);

  // Get User
  const getUser = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Get Repos
  const getUserRepos = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=15&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    // setRepos(res.data)
    // setLoading(false)
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <LjohnsonContext.Provider
      value={
        {
          // users: state.users,
          // loading: state.loading,
          // searchUsers,
        }
      }>
      {props.children}
    </LjohnsonContext.Provider>
  );
};

export default LjohnsonState;
