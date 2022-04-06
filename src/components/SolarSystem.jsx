import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((p, i) => (<PlanetCard
            key={ i }
            planetName={ p.name }
            planetImage={ p.image }
          />))
        }
      </div>
    );
  }
}

export default SolarSystem;
