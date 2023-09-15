import React from 'react'


const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {

    const blogPost = [
        {title: 'Blok Post #1'},
        {title: 'Blok Post #2'},
        {title: 'Blok Post #3'},
    ]
    return <BlogContext.Provider value={blogPost}>{children}</BlogContext.Provider>
}

export default BlogContext; 