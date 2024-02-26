"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '@/components/navbar/page';
import Footer from '@/components/footer/page';
import { Button, Menu, MenuItem } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaEllipsisV } from 'react-icons/fa'; 
import { useDispatch } from 'react-redux';

const Home = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/posts');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (postId) => {
    try {
      const res = await fetch(`http://localhost:5000/posts/${postId}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete post');
      }
      setPosts(posts.filter(post => post._id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleViewPost = (postId) => {
    router.push(`/post/${postId}`);
  };

  const handleEditPost = (postId) => {
    router.push(`/post/${postId}/edit`);
  };

  return (
    <div>
      <Head>
        <title>IT-Gyaan - Explore IT Insights</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">WELCOME TO</h2>
              <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 text-gray-900">IT-Gyaan - Explore IT Insights</h1>
              <p className="text-lg leading-relaxed mx-auto text-gray-500">A place to share your thoughts, stories, and ideas about IT related topics</p>
            </div>
            <div className="flex flex-wrap -m-4">
              {posts.map((post) => (
                <div key={post._id} className="lg:w-1/4 md:w-1/2 p-4 relative">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md relative">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{post.title}</h2>
                    <p className="leading-relaxed text-base mb-4">{post.content}</p>
                    <div className="absolute top-2 right-2 cursor-pointer" onClick={() => setActivePost(activePost === post._id ? null : post._id)}>
                      <FaEllipsisV className="text-gray-600 h-6 w-6" />
                      {activePost === post._id && (
                        <Menu placement="bottom-end" className="bg-white border rounded-lg overflow-hidden mt-2 shadow-md">
                          <MenuItem onClick={() => handleViewPost(post._id)}>View</MenuItem>
                          <MenuItem onClick={() => handleEditPost(post._id)}>Edit</MenuItem>
                          <MenuItem className="text-red-600" onClick={() => handleDelete(post._id)}>Delete</MenuItem>
                        </Menu>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button as={Link} href="/login" className="  mx-auto mt-8 mb-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore More</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
