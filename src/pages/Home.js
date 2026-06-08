import React, { useState } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Reviews from '../components/Reviews';
import Expect from '../components/Expect';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Reviews />
        <Expect />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
