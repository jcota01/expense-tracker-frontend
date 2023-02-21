import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import NavigationBar from './navigation/NavigationBar';
import LoginPage from './pages/LoginPage';
import {HomePage} from './pages/HomePage';

export const API_URL = "http://127.0.0.1:8000";

function App() {
  return (
      <div>
          <BrowserRouter>
              <NavigationBar />
              <br />
              <Routes>
                  <Route exact path='/' element={ <HomePage /> } />
                  <Route path='login' element={ <LoginPage /> } />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
