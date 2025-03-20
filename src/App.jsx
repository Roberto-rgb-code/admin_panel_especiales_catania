import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EspecialesList from './components/EspecialesList';
import EspecialesForm from './components/EspecialesForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EspecialesList />} />
        <Route path="/nuevo" element={<EspecialesForm />} />
        <Route path="/editar/:id" element={<EspecialesForm />} />
      </Routes>
    </Router>
  );
}

export default App;