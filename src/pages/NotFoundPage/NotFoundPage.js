import React from 'react';

import './NotFoundPage.css';

const NotFoundPage = () => (
  <article className='not-found-page'>
    <h1 className='title'>The page you are looking for does not exist!</h1>
    <div className='error-code'>
      404 <span className='sad-smile'>&#9785;</span>
    </div>
  </article>
);

export default NotFoundPage;
