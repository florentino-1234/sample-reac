import React, { Fragment } from 'react';

const Bill = ({  totalTickets, ticketCost, tax }) => {

   
    return (
        <Fragment>
            <div className="container my-3 border border-primary">
               
                <div className="row ">
                    <div className=" col-sm-12 alert alert-primary">
                        Detalle Factura
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        Total Tickets:
                    </div>
                    <div className="col-sm-4">
                    $ {totalTickets}
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                    Moto:
                    </div>
                    <div className="col-sm-4">
                    $ {totalTickets * ticketCost}
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-4">
                    Taxes:
                    </div>
                    <div className="col-sm-4">
                    $ {(totalTickets * ticketCost) * tax}
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-4">
                    Importe:
                    </div>
                    <div className="col-sm-4">
                    $ {(totalTickets * ticketCost) + (totalTickets * ticketCost) * tax}
                    </div>
                </div>


            </div>
        </Fragment>
    );
}

export default Bill; 