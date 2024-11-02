import React from 'react';
import './TilesSection.css';

const Tile = ({ title }) => (
  <div className="tile">
    <div className="tile-image"></div>
    <h3>{title}</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  </div>
);

const TilesSection = () => (
  <section className="tiles-section">
    <Tile title="Tile 1 heading" />
    <Tile title="Tile 2 heading" />
    <Tile title="Tile 3 heading" />
    <button className="view-more">View more</button>
  </section>
);

export default TilesSection;
