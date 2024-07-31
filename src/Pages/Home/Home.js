import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../Components/Navbar/TitileCards/TitleCards';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt="Hero Banner" className='banner-image' />
        <div className='hero-caption'>
          <img src={hero_title} alt="Hero Title" className='caption-image' />
          <p>
            The series blends thrilling action sequences with deep emotional arcs, 
            exploring themes of duty, loyalty, and the enduring battle between good and evil.
          </p>
          <div className="hero-btn">
            <button className='play-btn'>
              <img src={play_icon} alt="Play Icon" /> Play
            </button>
            <button className='info-btn'>
              <img src={info_icon} alt="Info Icon" /> Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className='more-cards'>
        <TitleCards title={"BlockBuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming Movies"} category={"upcoming"} />
        <TitleCards title={"Top Picks for You"} category={"popular"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
