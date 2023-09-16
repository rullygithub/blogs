import React, {useReducer, useState} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost':
            return [...state, {title: `Blog Posting #${state.length + 1}`}];
            default: 
            return state;
    }
};

export const BlogProvider = ({children}) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({
        type: 'add_blogpost'
    })
  }

  
  const editBlogPost = () => {};
  const removeBlogPost = () => {};

  // const blogPost = [ 
  //     {title: 'Blok Post #1'},
  //     {title: 'Blok Post #2'},
  //     {title: 'Blok Post #3'},
  // ]
  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
