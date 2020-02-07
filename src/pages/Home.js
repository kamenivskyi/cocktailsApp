import React from 'react';
import Search from '../components/Cocktails/Search';
import Filters from '../components/Cocktails/Filters';
import Cocktails from '../components/Cocktails/Cocktails';

const Home = ({
  searchDrinks,
  setAlert,
  onFilterChange,
  loading,
  cocktails,
  ...props
}) => {
  return (
    <>
      <div className='form-row'>
        <Search searchDrinks={searchDrinks} setAlert={setAlert} />
        <Filters onFilterChange={onFilterChange} />
      </div>
      <Cocktails {...props} cocktails={cocktails} loading={loading} />
    </>
  );
};

export default Home;
