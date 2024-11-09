import React from 'react';
import './TilesSection.css';

const Tile = ({ image, title, description }) => (
  <div className="tile">
    <img src={image} alt={title} className="tile-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const TilesSection = () => (
  <section className="tiles-section">
    <div className='ships-exampels'>
    <Tile 
      image="/img/titanik.png" 
      title="Titanik" 
      description="A legendary ocean liner known for its grandeur and tragic maiden voyage." 
    />
    <Tile 
      image="/img/queen_mary.jpg" 
      title="Queen Mary" 
      description="A historic British ocean liner famous for its elegance and transatlantic crossings." 
    />
    <Tile 
      image="/img/bismarck.jpg" 
      title="Bismarck" 
      description="A powerful German battleship renowned for its formidable presence during WWII." 
    />
    <Tile 
      image="/img/uss_enterprise.jpg" 
      title="USS Enterprise" 
      description="An iconic American aircraft carrier celebrated for its crucial role in major naval battles." 
    />
    </div>
    <button className="view-more-tile">View more</button>
  </section>
);

export default TilesSection;
