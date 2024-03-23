import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure axios is installed in your project
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'; // Import icons from Font Awesome

function Blog() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Function to fetch blog post and comments from the backend
  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get('your_backend_api_endpoint_for_single_post');
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get('your_backend_api_endpoint_for_comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleAddComment = async () => {
    try {
      // Send new comment to the backend
      await axios.post('your_backend_api_endpoint_for_new_comment', { comment: newComment });
      // Fetch updated comments after adding a new comment
      fetchComments();
      // Clear new comment input
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleLike = async () => {
    try {
      // Send like action to the backend
      await axios.post('your_backend_api_endpoint_for_like');
      // Fetch updated post after liking
      fetchPost();
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleDislike = async () => {
    try {
      // Send dislike action to the backend
      await axios.post('your_backend_api_endpoint_for_dislike');
      // Fetch updated post after disliking
      fetchPost();
    } catch (error) {
      console.error('Error disliking post:', error);
    }
  };

  return (
    <div className="blog-container">
      {post && (
        <div>
          <h2>{post.title}</h2>
          <img src={post.image} alt="Blog Post" className="blog-image" />
          <p>{post.content}</p>
          <div>
            <button onClick={handleLike}>
              <FontAwesomeIcon icon={faThumbsUp} /> Like
            </button>
            <button onClick={handleDislike}>
              <FontAwesomeIcon icon={faThumbsDown} /> Dislike
            </button>
            <p>Likes: {post.likes}</p>
            <p>Dislikes: {post.dislikes}</p>
          </div>
          <hr />
        </div>
      )}
      <div>
        <h3>Comments</h3>
        {comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))}
        <h4>Add a Comment</h4>
        <textarea value={newComment} onChange={e => setNewComment(e.target.value)}></textarea>
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
}

export default Blog;
