import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import NewEmployee from './NewEmployee/NewEmployee.js';
import ViewData from './ViewData/ViewData.js'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = { <App/> } />
      <Route path='addData' element = { <NewEmployee/> } />
      <Route path='viewData' element = { <ViewData/> } />
    </Routes>
  </BrowserRouter>
);
