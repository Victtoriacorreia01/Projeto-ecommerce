import React from 'react';
import './Home.css';
import iphone from "../../assets/apple.jpg"
import fone from "../../assets/fonee.jpg"
import relogio from "../../assets/relogiodigi.jpg"

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Our E-Commerce Site</h1>
          <p>Discover the best products at unbeatable prices.</p>
          <a href="#products" className="cta-button">Shop Now</a>
        </div>
      </header>

      <section id="products" className="products">
        <div className="product-grid">
          <div className="product-card">
            <img src={iphone} alt="Product 1" />
            <div className="product-info">
              <h3>Product 1</h3>
              <p>Description</p>
              <p className="product-price">$99.99</p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
          <div className="product-card">
            <img src={relogio} alt="Product 2" />
            <div className="product-info">
              <h3>Product 2</h3>
              <p>Description</p>
              <p className="product-price">$149.99</p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
          <div className="product-card">
            <img src={fone} alt="Product 3" />
            <div className="product-info">
              <h3>Product 3</h3>
              <p>Description</p>
              <p className="product-price">$199.99</p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="benefit">
          <i className="fas fa-shipping-fast fa-3x"></i>
          <h2>Fast Shipping</h2>
          <p>Enjoy fast and reliable shipping on all orders.</p>
        </div>
        <div className="benefit">
          <i className="fas fa-headphones fa-3x"></i>
          <h2>24/7 Customer Support</h2>
          <p>Our support team is available round the clock to assist you.</p>
        </div>
        <div className="benefit">
          <i className="fas fa-money-bill-wave fa-3x"></i>
          <h2>Money Back Guarantee</h2>
          <p>We offer a hassle-free money back guarantee on all purchases.</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio at nisi lacinia, ac molestie felis dapibus."</p>
          <p>- Lara Silva</p>
        </div>
        <div className="testimonial">
          <p>"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
          <p>- Otavio Mario</p>
        </div>
        <div className="testimonial">
          <p>"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
          <p>- Jonh Louis</p>
        </div>
        <div className="testimonial">
          <p>"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
          <p>- Jane Correia</p>
        </div>
      </section>

      <section className="contato">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to contact us.</p>
        <button className="contact-button">Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
