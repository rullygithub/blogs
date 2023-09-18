import React, {useReducer, useState} from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'remove_blogpost' :
      return state.filter((addBlogPost) => addBlogPost.id !== action.payload);
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Posting #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({
      type: 'add_blogpost',
    });
  };
};

const removeBlogs = dispatch => {
  return (id) => {
    dispatch({type: 'remove_blogpost', payload: id})
  }
}

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, removeBlogs},
  [],
);
