// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) =>  {
  const INITIAL_STATE = {
    cars: {
      redCar: false,
      blueCar: false,
      yellowCar: false,
      }
    }

  const [state, setState] = useState(INITIAL_STATE);
  
  const moveCar = (key, side) => {
    setState({
      cars: {
        ...state.cars,
        [key]: side,
      }
    })
  };

    const context = {
      ...state,
      moveCar,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
