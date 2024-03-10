"use client"
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { selectedPostId } = useSelector(state => state.post);

  useEffect(() => {
    if (selectedPostId) {
      fetchPost(selectedPostId);
    }
  }, [selectedPostId]);

  const fetchPost = async (postId) => {
    try {
      const res = await fetch(`http://localhost:${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`);
      const data = await res.json();
      setTitle(data.post.title);
      setContent(data.post.content);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Editor;
