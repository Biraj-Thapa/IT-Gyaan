import React from 'react';
import Head from 'next/head';
import Nav from '@/components/navbar/page';
import Footer from '@/components/footer/page';

const Home = () => (
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
            <div className="lg:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Cloud Computing</h2>
                <p className="leading-relaxed text-base mb-4">Exploring the latest trends and technologies in cloud computing.</p>
                <a href="#" className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Cybersecurity</h2>
                <p className="leading-relaxed text-base mb-4">Stay updated with the latest cybersecurity threats and best practices.</p>
                <a href="#" className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Artificial Intelligence</h2>
                <p className="leading-relaxed text-base mb-4">Exploring the applications and impact of artificial intelligence in IT.</p>
                <a href="#" className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Data Science</h2>
                <p className="leading-relaxed text-base mb-4">Exploring data science techniques and tools for IT professionals.</p>
                <a href="#" className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore More</button>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Home;