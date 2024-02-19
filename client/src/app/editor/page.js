"use client";
import React,{useState} from 'react';
import dynamic from 'next/dynamic'
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })
import "easymde/dist/easymde.min.css";
import { Button } from '@nextui-org/react';

const Editor = () => {
  const [editorFormInput, setEditorFormInput]= useState("")
  const savePost=async()=>{
    const res = await fetch(`http://localhost:${process.env.NEXT_PUBLIC_API_URL}/posts/`, {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({content:editorFormInput}),
    });

  }
  return (
    <div >
      <SimpleMDE  value={editorFormInput} onChange={(value)=>setEditorFormInput(value)}/>
      <div className='flex justify-center'>
      <Button onClick={savePost} className="mt-4 bg-black text-white">Post</Button>
      </div>
      
    </div>
  );
};

export default Editor;