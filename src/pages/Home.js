import React from 'react';
import InputPanel from '../components/Cocktails/InputPanel';
import Filters from '../components/Cocktails/Filters';
import Cocktails from '../components/Cocktails/Cocktails';

const Home = ({ searchDrinks, generateAlert, onFilterChange, ...props }) => {
  return (
    <>
      <div className='form-row'>
        <InputPanel searchDrinks={searchDrinks} generateAlert={generateAlert} />
        <Filters onFilterChange={onFilterChange} />
      </div>
      <Cocktails {...props} />
    </>
  );
};

export default Home;
