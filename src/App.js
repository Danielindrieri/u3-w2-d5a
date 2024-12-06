import React from 'react';
import FetchWeather from './components/Home.jsx';
import MyNav from './components/MyNav.jsx'
import MyFooter from './components/MyFooter.jsx'
import './App.css'



function App() {
  return (
   <div>
    <MyNav/>
    <FetchWeather/>
    <MyFooter/>
   

   </div>
  );
}

export default App;
