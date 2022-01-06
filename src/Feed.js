import React, { useState, useEffect } from 'react';
import './Feed.css';
import Post from './Post';
import axios from 'axios';

;

const Feed = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=Mo2dp6WkMMJqvJcXYDXtdUbhdeiPzBDRZ32Pr5nV`, {
    params: {
      count: 7,
    }
  })
  .then(response => {
    setData(response.data);
  })
  .catch(error => {
    console.error('Error fetching posts: ', error);
    setError(error);
  })
  .finally(() => {
    setLoading(false);
  })
}, []);

if (loading) return 'Loading...';
if (error) return `Sorry, we're unable to load your posts at this time!`;

  const posts = data;
  console.log(posts);

  return (
    <main className="post-grid">
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </main>
  );
}

export default Feed;