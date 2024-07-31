import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
//import cards_data from '../../../assets/cards/Cards_data';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDM0ZTQ1NmVkNTgwZGU1MzYzZjJhY2NmYTlkYzdmYSIsIm5iZiI6MTcyMTYyNDA5OC40NDAwMjYsInN1YiI6IjY2ODc3ZGVjNzIwOGRiNGU4NDkzNmE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.49CpjwHvod8NVBImcnR_r4NBMb9ml9MPlioFMQwY4LI'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options);
        const data = await response.json();
        setApiData(data.results || []); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
    cardsRef.current.addEventListener('wheel', handleWheel);

    
    return () => {
      cardsRef.current.removeEventListener('wheel', handleWheel);
    };
  }, [category]); 
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData && apiData.map((card, index) => (
          <div className="card" key={index}>
            <img src={'https://image.tmdb.org/t/p/w500' + card.backdrop_path} alt={card.original_title} />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
