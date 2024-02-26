// pages/posts/[postId].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Nav from '@/components/navbar/page';
import Footer from '@/components/footer/page';

const PostPage = () => {
  const router = useRouter();
  const { postId } = router.query; // Access postId from router.query
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:5000/posts/${postId}`);
        if (!res.ok) {
          throw new Error('Failed to fetch post');
        }
        const postData = await res.json();
        setPost(postData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{post.title} - IT-Gyaan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 text-gray-900">{post.title}</h1>
              <p className="text-lg leading-relaxed mx-auto text-gray-500">{post.content}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PostPage;
