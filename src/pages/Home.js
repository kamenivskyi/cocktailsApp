import React from 'react';
import SearchPanel from '../components/Cocktails/SearchPanel';
import Filters from '../components/Cocktails/Filters';
import Cocktails from '../components/Cocktails/Cocktails';

const Home = ({ getDrinks, generateAlert, onFilterChange, ...props }) => {
  return (
    <>
      <div className='form-row'>
        <SearchPanel getDrinks={getDrinks} generateAlert={generateAlert} />
        <Filters onFilterChange={onFilterChange} />
      </div>
      <Cocktails {...props} />
    </>
  );
};

export default Home;
