import React, { useState, useEffect } from 'react';

const ListOfCards = ({ setDatosFactura }) => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);


    useEffect(() => {


        setDatosFactura({
            totolTickets: count1 + count2 + count3,
            mount: count1 * 2 + count2 * 3 + count3 * 4,
            taxes: (count1 * 2 + count2 * 3 + count3 * 4) * 0.16
        });
    }, [count1, count2, count3, setDatosFactura])
    return (
        <div className="container">
            <div className="card-deck">
                <div className="card mt-3">

                <div className="card-header">
                        The Godfather
                </div>
                    <div className="card-body">
                        <h5 className="card-title">Director: Francis Ford Coppola</h5>
                        <p className="card-text"> Total : {count1}</p>
                        <p className="card-text">
                            <button className="btn btn-primary" type="submit" onClick={() => setCount1(count1 + 1)}>Button</button>

                        </p>
                    </div>
                </div>
                <div className="card mt-3">

                    <div className="card-header">
                        Once Upon a Time in America
                </div>

                    <div className="card-body">
                        <h5 className="card-title">Director:  Sergio Leone</h5>
                        <p className="card-text">Total : {count2}</p>
                        <p className="card-text">
                            <button className="btn btn-primary" type="submit" onClick={() => setCount2(count2 + 1)}>Button</button>
                        </p>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-header">
                        The Searchers
                </div>

                    <div className="card-body">
                        <h5 className="card-title">Director: John Ford</h5>

                        <p className="card-text">Total : {count3}</p>
                        <p className="card-text">
                            <button className="btn btn-primary" type="submit" onClick={() => setCount3(count3 + 1)}>Button</button>
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ListOfCards;