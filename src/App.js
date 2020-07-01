import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import ListOfCards from './components/ListOfrCards';
import Bill from './components/Bill';

function App() {

  //iniciamos datos de la factura
  const [datosFactura, setDatosFactura] = useState( {
    totolTickets : 0,
    mount: 0,
    taxes: 16.0,
    
  } );

  return (
    <Fragment>
      <Header></Header>
      <ListOfCards bill={datosFactura}
      setDatosFactura ={setDatosFactura}
      ></ListOfCards>
      <Bill bill={datosFactura}></Bill>
    </Fragment>
  );
}

export default App;
