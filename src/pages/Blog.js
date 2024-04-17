import React, { useState, useEffect } from 'react';

import '../styles/Blog.css';
import { getBlogs } from '../lib/config';

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getBlogs();
        setBlogs(fetchedBlogs);
      } catch (e) {
        console.error(e.message);
      } finally {
        setIsLoading(false); // Set loading state to false after fetching (success or error)
      }
    };

    fetchBlogs(); // Call the function on component mount
  }, []);

  return (
    <div className="blog-container">
      <header>
        <h1>My Blog</h1>
        <a href="/create-post" className="create-post-btn">Create New Post</a>
      </header>
      <div className="blog-container">
        <h1>Blog Posts</h1>
        {isLoading ? ( // Display loading indicator while fetching
          <p>Loading posts...</p>
        ) : (
          blogs.length > 0 ? (
            blogs.map((post) => (
              <div key={post.$id} className="post">
                <h2><a href={`/post/${post.slug}`}>{post.title}</a></h2> {/* Link to post detail page */}
                <p>{post.summary}</p>
              </div>
            ))
          ) : (
            <p>No blog posts found!</p>
          )
        )}
      </div>
    </div>
  );
}

export default BlogPage;
