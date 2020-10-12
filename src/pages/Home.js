import React from 'react';
import Search from '../components/Cocktails/Search';
import Filters from '../components/Cocktails/Filters';
import Cocktails from '../components/Cocktails/Cocktails';

const Home = ({ searchDrinks, generateAlert, onFilterChange, ...props }) => {
  return (
    <>
      <div className='form-row'>
        <Search searchDrinks={searchDrinks} generateAlert={generateAlert} />
        <Filters onFilterChange={onFilterChange} />
      </div>
      <Cocktails {...props} />
    </>
  );
};

export default Home;
