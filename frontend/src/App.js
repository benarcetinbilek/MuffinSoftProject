import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.js"
import Rest from "./components/rest.js"
import Login from "./components/login.js"
import MyTimeTable from "./components/myTimeTable.js"
import CreateTimeTable from "./components/createTimeTable.js"
import FirstPage from "./components/firstPage.js"
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <CreateTimeTable />
    </div>
  );
}

export default App;
