import React, { useState } from 'react';
import './TilesSection.css';

const Tile = ({ image, title, description }) => (
  <div className="tile">
    <img src={image} alt={title} className="tile-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const TilesSection = () => {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="tiles-section">
      <div className="ships-examples">
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
      
      {showMore && (
        <div className="show-more-content">
          <h2>Additional Ships</h2>
          <p>Discover more legendary ships and their remarkable histories, from groundbreaking explorers to formidable warships.</p>
          <div className='extra-ships'>
            <Tile 
              image="/img/hms_victory.jpg_fit=1" 
              title="HMS Victory" 
              description="The flagship of the British Navy during the Battle of Trafalgar, led by Admiral Nelson." 
            />
            <Tile 
              image="/img/santa_maria.jpeg" 
              title="Santa Maria" 
              description="The largest of the three ships used by Christopher Columbus in his first voyage across the Atlantic." 
            />
          </div>
        </div>
      )}
      
      <button className="view-more-tile" onClick={handleViewMore}>
        {showMore ? 'View Less' : 'View More'}
      </button>
    </section>
  );
};

export default TilesSection;
