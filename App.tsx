
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import { products } from './data/products';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-turquoise mb-8">
          منتجاتنا
        </h2>
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;