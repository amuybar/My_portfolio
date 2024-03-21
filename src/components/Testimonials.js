import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Testimonial.css'

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('/api/testimonials'); // Replace with your backend API endpoint for fetching testimonials
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const handlePostTestimonial = async () => {
    try {
      const response = await axios.post('/api/testimonials', { name, message }); // Replace with your backend API endpoint for posting testimonials
      console.log('Testimonial posted:', response.data);
      // Clear input fields after posting
      setName('');
      setMessage('');
      // Fetch testimonials to update the list
      fetchTestimonials();
    } catch (error) {
      console.error('Error posting testimonial:', error);
    }
  };

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      {testimonials.length === 0 ? (
        <p>No testimonials available</p>
      ) : (
        <ul>
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <strong>{testimonial.name}</strong>: {testimonial.message}
            </li>
          ))}
        </ul>
      )}
      <div className="post-testimonial">
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea placeholder="Your Testimonial" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button onClick={handlePostTestimonial}>Post Testimonial</button>
      </div>
    </div>
  );
}

export default Testimonials;
