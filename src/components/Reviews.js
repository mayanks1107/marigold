import React from 'react';
import { reviews } from '../data/team';
import './Reviews.css';
import pinkflower from "../components/pink-flower.png"
import redflower from "../components/red-flower.png"
export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
    <img src = {pinkflower} className='pink_flower_review'/>
      <div className="reviews__inner">
        <div className="reviews__header">
          <h2 className="reviews__title">EARLY REVIEWS</h2>
          
        </div>
        <div className="reviews__grid">
          {reviews.map((r) => (
            <blockquote key={r.name} className="reviews__card">
              <p>"{r.quote}"</p>
              <footer>{r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
          <img src = {redflower} className='red_flower_review'/>
    </section>
  );
}
