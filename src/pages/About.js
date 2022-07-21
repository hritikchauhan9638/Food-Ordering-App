import React from 'react';
import '../styles/About.css';
import AboutImage from '../assets/photo.jpeg';

function About() {
  return (
    <div className='about'>
      <div
        className='aboutTop'
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quod
          laboriosam voluptates laborum ut, molestiae dolorum in similique.
          Autem repudiandae temporibus voluptates voluptatibus possimus aperiam.
          Quia, omnis. Officiis maiores reprehenderit totam perspiciatis eveniet
          obcaecati ab minima, eum dolor illum itaque placeat rerum. Porro
          tenetur inventore vel nam voluptate cumque nobis. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ipsa, praesentium adipisci
          vitae inventore eos consequatur cumque aliquam quo ab eius vel! Illum
          accusamus officia dicta amet nesciunt eaque officiis reprehenderit.
        </p>
      </div>
    </div>
  );
}

export default About;
