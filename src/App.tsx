import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Labs from './Labs';
import Kambaz from './Kambaz';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import store from "./Kambaz/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="labs/Lab1" />} />
            <Route path='/Labs/*' element={<Labs />} />
            <Route path="/Kambaz/*" element={<Kambaz />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
