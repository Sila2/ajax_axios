import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Person from './component/Person';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode >
    <Person header = "bilgi" />
  </React.StrictMode>
);