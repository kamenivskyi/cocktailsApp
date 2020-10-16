import React from 'react';
import SearchPanel from '../components/drinks/SearchPanel';
import Filters from '../components/drinks/Filters';
import DrinksList from '../components/drinks/DrinksList';

const Home = ({ getDrinks, generateAlert, onFilterChange, ...restProps }) => (
  <>
    <div className='form-row'>
      <SearchPanel getDrinks={getDrinks} generateAlert={generateAlert} />
      <Filters onFilterChange={onFilterChange} />
    </div>
    <DrinksList {...restProps} />
  </>
);

export default Home;
