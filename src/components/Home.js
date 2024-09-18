// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Marketplace de Artesanato e Produtos Locais</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Bem-vindo ao nosso Marketplace!</h2>
        <p>Explore e encontre produtos locais e artesanato exclusivo.</p>
      </main>
    </div>
  );
};

export default Home;
