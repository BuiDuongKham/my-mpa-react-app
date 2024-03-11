import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <h1 className="text-center text-4xl">We are the pioneers of this industry</h1>
      <Footer />
    </div>
  );
}
