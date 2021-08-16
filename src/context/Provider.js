// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const INITIAL_CARS = {
  cars: {
    redCar: false,
    blueCar: false,
    yellowCar: false,
  },
}
function Provider({ children }) {
  const [car, setCar] = useState(INITIAL_CARS)
  const [signalColor, setSignalColor] = useState('red');

  function moveCar(key, side) {
    setCar({
      cars: {
        ...car.cars,
        [key]: side,
      },
    });
  };

    const context = {
      ...car,
      color: signalColor,
      moveCar,
      changeSignal: setSignalColor,
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
