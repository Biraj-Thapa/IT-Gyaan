"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import { Button } from '@nextui-org/react';
import Link from 'next/link'

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

const Editor = () => {
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 

  const savePost = async () => {
    if (!title || !content) {
      alert('Please enter both title and content');
      return;
    }
    try {
      const res = await fetch(`http://localhost:${process.env.NEXT_PUBLIC_API_URL}/posts/`, {
        method: "post",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ title:title,content:content }), 
      });
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error saving post:', error);
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
        <Button onClick={savePost} as={Link} href="/home" className="mt-4 bg-black text-white">Post</Button>
      </div>
     
    </div>
  );
};

export default Editor;
