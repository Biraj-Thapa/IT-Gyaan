"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '@/components/navbar/page';
import Footer from '@/components/footer/page';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setSelectedPosts } from '@/redux/reducerSlice/postSlice';

const Home = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

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
            <div className="text-center mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium mb-1">WELCOME TO</h2>
              <h1 className="sm:text-4xl text-5xl font-bold title-font mb-4 text-gray-900">IT-Gyaan</h1>
              <p className="text-lg leading-relaxed mx-auto text-gray-500">Explore IT Insights and share your thoughts, stories, and ideas.</p>
            </div>
            <div className="flex flex-wrap -m-4">
              {posts.map((post) => (
                <div key={post._id} className="lg:w-1/3 md:w-1/2 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{post.title}</h2>
                    <p className="leading-relaxed text-base mb-4">{post.content}</p>
                    <div className="flex justify-between items-center">
                      <Link href={`edit`}>
                        <Button onClick={() => dispatch(setSelectedPosts(post._id))} className="text-indigo-500 inline-flex items-center mr-2">Edit</Button>
                      </Link>
                      <Link href={`/view`}>
                        <Button className="text-indigo-500 inline-flex items-center">View</Button>
                      </Link>
                      <Button onClick={() => handleDelete(post._id)} className="text-red-500 inline-flex items-center">Delete</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

