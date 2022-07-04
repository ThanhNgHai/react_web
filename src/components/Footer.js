import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the website to listen great music and ost
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/home'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/home'>Contact</Link>
            <Link to='/home'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos & Audios</h2>
            <Link to='/home'>Videos</Link>
            <Link to='/home'>Audios</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/home'>Instagram</Link>
            <Link to='/home'>Facebook</Link>
            <Link to='/home'>Youtube</Link>
            <Link to='/home'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/home' className='social-logo'>
              LOVE MUSIC
              <i class="fa-solid fa-headphones"></i>
            </Link>
          </div>
          <small class='website-rights'>LOVE MUSIC 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/home'
              target='_blank'
              aria-label='Facebook'
            >
              <i class="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/home'
              target='_blank'
              aria-label='Instagram'
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/home'
              target='_blank'
              aria-label='Youtube'
            >
              <i class="fa-brands fa-youtube"></i>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/home'
              target='_blank'
              aria-label='Twitter'
            >
              <i class="fa-brands fa-twitter"></i>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/home'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
