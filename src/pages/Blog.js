import React, { useState, useEffect } from 'react';
import { supabase } from '../api/supabase'; // Import Supabase client
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Blog.css';

function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from Supabase
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*');
        if (error) {
          throw error;
        }
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="blog-container">
      <header>
        <h1>My Blog</h1>
        <Link to="/create-post" className="create-post-btn">Create New Post</Link>
      </header>
      <div className="blog-list">
        {posts.map(post => (
          <Link to={`/post/${post.id}`} key={post.id} className="blog-card-link">
            <div className="blog-card">
              <img src={post.image} alt={post.title} />
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
