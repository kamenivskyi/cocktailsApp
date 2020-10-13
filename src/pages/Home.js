import React from 'react';
import SearchPanel from '../components/cocktails/SearchPanel';
import Filters from '../components/cocktails/Filters';
import Cocktails from '../components/cocktails/Cocktails';

const Home = ({ getDrinks, generateAlert, onFilterChange, ...otherProps }) => (
  <>
    <div className='form-row'>
      <SearchPanel getDrinks={getDrinks} generateAlert={generateAlert} />
      <Filters onFilterChange={onFilterChange} />
    </div>
    <Cocktails {...otherProps} />
  </>
);

export default Home;
