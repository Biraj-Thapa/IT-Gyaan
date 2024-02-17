"use client";
import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button } from '@nextui-org/react';

const Editor = () => {
  return (
    <div >
      <SimpleMDE />
      <div className='flex justify-center'>
      <Button className="mt-4 bg-black text-white">Post</Button>
      </div>
      
    </div>
  );
};

export default Editor;