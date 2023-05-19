import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import AddSales from './components/AddSales';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SalesList from './components/SalesList';
import updateSale from './components/updateSale';


function App() {
  const [addedData, setAddedData] = useState([]);

  return (
    <Router>
      <div>
        <Header />
        
        <Route path="/" exact component={SalesList} />
        <Route path="/add" exact component={AddSales} />
        <Route path="/update" exact component={updateSale} />
       
      
      </div>
    </Router>
    
  );
}

export default App;
