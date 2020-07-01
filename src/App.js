import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import ListOfCards from './components/ListOfrCards';
import Bill from './components/Bill';
import axios from 'axios';
import './App.css'
function App() {
  
  //datos facturacion 
  const [totalTickets , setTotalTickets ] = useState( 0 );
  const [ticketCost , setTicketCost ] = useState( 55 );
  const [tax , setTaxs ] = useState( 0.16 );

  const[listofMovies, setListofMovies] =useState({});

  useEffect(() => {
    const url = "http://localhost:3000/movie.json";
   
    const getMovies = async() =>{
       await axios.get(url).then( response => {
        setListofMovies( response.data );
      }).catch( error => {
        console.log(error);
      });
     
    }

    getMovies();

    }, []
  )

  return (
    <Fragment>
      <Header></Header>
      <ListOfCards 
       
        listofMovies = {listofMovies}
        setTotalTickets ={setTotalTickets}
        totalTickets = {totalTickets}
      ></ListOfCards>
      <Bill 
        totalTickets = {totalTickets}
        ticketCost = {ticketCost}
        tax  =  {tax}
      ></Bill>
    </Fragment>
  );
}

export default App;
