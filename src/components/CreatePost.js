import React, { useState } from 'react';

import '../styles/CreatePost.css';
import { createBlog } from '../lib/config';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [slag, setSlag] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage(''); // Clear previous messages

    try {
      const formData = { title, slag, content, summary };
      await createBlog(formData);
      setMessage('Blog post created successfully!');
      setTitle('');
      setSlag('');
      setContent('');
      setSummary('');
    } catch (error) {
      console.error(error);
      setMessage(`Error creating blog post: ${error.message}`);
    }
  };



  return (
    <div className="create-blog-container">
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="slug">Slug:</label>
        <input
          type="text"
          id="slug"
          value={slag}
          onChange={(e) => setSlag(e.target.value)}
          required
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
        <p className="error-message">{message}</p>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreateBlog;
