import React from 'react';

import './App.css';

//Pages
import Home from './Pages/Home'
import Room from './Pages/Room'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'

//Routers
import {Route ,Switch,NavLink } from 'react-router-dom'

//Components
import Navbar from './Componenets/Navbar'
import axios from 'axios'


/* axios({
  "method":"GET",
  "url":"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/2019-09-01",
  "headers":{
  "content-type":"application/octet-stream",
  "x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
  "x-rapidapi-key":"4ec155d062msh82d9ad7cbea39e9p160cfdjsn093998f037b5"
  },"params":{
  "inboundpartialdate":"2020-9-01"
  }
  })
  .then((response)=>{
    console.log(response)
  })
  .catch((error)=>{
    console.log(error)
  }) */
function App() {
  return (
      <>
      <Navbar />
      <Switch>
      <Route exact path='/'  component={Home} />
      <Route exact path='/rooms/' component={Room} />
      <Route exact path='/rooms/:slug' component={SingleRoom} />
      <Route  component={Error} />
      </Switch>
      </>
      );
}

export default App;
