import React from 'react';

import './NotFound.css';

const NotFound = () => (
  <section className='not-found-page'>
    <h1 className='title'>The page you are looking for does not exist!</h1>
    <div className="error-code">404 <span className='sad-smile'>&#9785;</span></div>
  </section>
)

export default NotFound;
