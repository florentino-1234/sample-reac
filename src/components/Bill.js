import React, { Fragment } from 'react';

const Bill = ({ bill }) => {

    const { totolTickets, mount, taxes } = bill;
    return (
        <Fragment>
            <div className="container">
                <div className="card-deck">

                    <div class="card mt-3">
                    <div className="card-header">
                    Detalle Factura
                    </div>
                       
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Total Tickets: {totolTickets}</li>
                            <li className="list-group-item">Moton: {mount} </li>
                            <li className="list-group-item">Taxes: {taxes}</li>
                            <li className="list-group-item">Importe: {mount + taxes}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Bill; 