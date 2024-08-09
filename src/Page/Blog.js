import React from 'react';
import '../Style/Blog.css';
import img1 from '../Images/Leadership.jpg';
import img2 from '../Images/blog2.jpg';
import img3 from '../Images/ChatGPT-.jpg';
import img4 from '../Images/blog4.webp';

function Blog() {
  return (
    <div className="container div2">
      <h1 className="divh1 ,FAQh1 underline">From Code to Career</h1>
      <p>Step into the Future of Programming with e-GURU: Your Ultimate Resource Hub</p>

      <section className="options">
        <a href="https://www.mindtools.com/authentic-leadership" target="_blank" rel="noopener noreferrer" className="col">
          <div className="pic">
            <img src={img1} alt="Leadership" />
          </div>
          <span className="title">5 Ways to Become an Authentic Leader</span>
          <p className="desc">Learn how to lead with authenticity and build strong relationships in the workplace.</p>
        </a>

        <a href="https://www.skillsyouneed.com/ips/communication-skills.html" target="_blank" rel="noopener noreferrer" className="col">
          <div className="pic">
            <img src={img2} alt="Communication Skills" />
          </div>
          <span className="title">Communication Skills: The Key to Success in Any Field</span>
          <p className="desc">Enhance your communication skills to succeed in any professional environment.</p>
        </a>

        <a href="https://davidwalsh.name/" target="_blank" rel="noopener noreferrer" className="col">
          <div className="pic">
            <img src={img3} alt="ChatGPT Plugins" />
          </div>
          <span className="title">ChatGPT Plugins for Marketing Success</span>
          <p className="desc">In this article, we’ll dive into the world of ChatGPT plugins...</p>
        </a>

        <a href="https://www.themuse.com/advice/10-tips-for-mastering-time-management-at-work" target="_blank" rel="noopener noreferrer" className="col">
          <div className="pic">
            <img src={img4} alt="Time Management" />
          </div>
          <span className="title">Time Management Tips for Professionals</span>
          <p className="desc">Learn how to manage your time effectively to maximize productivity.</p>
        </a>
      </section>
    </div>
  );
}

export default Blog;
