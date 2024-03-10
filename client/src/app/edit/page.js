"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

const Editor = () => {
  const router = useRouter();
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const { selectedPostId } = useSelector(state => state.post);

  useEffect(() => {
    if (selectedPostId) {
      fetchPost();
    }
  }, [selectedPostId]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`http://localhost:${process.env.NEXT_PUBLIC_API_URL}/posts/${selectedPostId}`);
      const data = await res.json();
      setTitle(data.post.title);
      setContent(data.post.content);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const savePost = async () => {
    if (!title || !content) {
      alert('Please enter both title and content');
      return;
    }
    try {
      const res = await fetch(`http://localhost:${process.env.NEXT_PUBLIC_API_URL}/posts/${selectedPostId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, content: content }), 
      });
      if (res.ok) {
        setTitle('');
        setContent('');
        router.push('/home'); 
      } else {
        console.error('Error updating post:', res.statusText);
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        className="block w-full px-4 py-2 mb-4 text-lg font-bold text-center bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
      <SimpleMDE
        value={content}
        onChange={(value) => setContent(value)}
      />
      <div className='flex justify-center'>
        <Button onClick={savePost} className="mt-4 bg-black text-white">Save Changes</Button>
      </div>
    </div>
  );
};

export default Editor;