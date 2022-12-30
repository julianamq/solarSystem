import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
// eu tava colocando requireeee
// erro no lint error  propType "planetName" is not required, but has no corresponding defaultProps declaration;
//   23:31  error  Typo in prop type chain qualifier: isRequire                                               react/no-typos
//   24:3   error  propType "planetImage" is not required, but has no corresponding defaultProps declaration  react/require-default-props
//   24:15  error  Missing space before value for key 'planetImage'                                           key-spacing
//   24:32  error  Typo in prop type chain qualifier: isRequire;
