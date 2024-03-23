import React, { useState } from 'react';
import { supabase } from '../api/supabase'; 
import '../styles/CreatePost.css'; // Import CSS file

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Insert new blog post into Supabase
      const { data, error } = await supabase
        .from('posts')
        .insert([{ title, content }]);
      if (error) {
        throw error;
      }

      // Reset form fields after successful submission
      setTitle('');
      setContent('');

      // Optionally, you can redirect the user to another page after successful submission
      // Example: history.push('/blog');
    } catch (error) {
      console.error('Error creating post:', error.message);
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create New Post</h2>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className='arrange'>
          <label htmlFor="title">Title:</label>
          <input 
            id="title"
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div className='arrange'>
          <label htmlFor="content">Content:</label>
          <textarea 
            id="content"
            rows='12'
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
