import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  //   return { type: 'UPDATE_TITLE', payload: newTitle };
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  //   return { type: 'BUY_ITEM' };
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

export default App;
