import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import PollingUnitList from './components/PollingUnitList';
import Lga from './components/Lga';
import AddResultForm from './components/AddResultForm'
import PollingUnit from './components/PollingUnit';



function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<PollingUnit />} />

          <Route path="/polling-unit-list" element={<PollingUnitList />} />
          <Route path="/add-new-polling" element={<AddResultForm />} />
          <Route path="/lga-scores" element={<Lga />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
