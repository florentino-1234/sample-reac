import React from 'react';

                            
const Movie = ({ movie, setTotalTickets,totalTickets }) => {

    const { Director, Title, Genre, Year } = movie;

    const incrementarTickert = e =>{
        e.preventDefault();
        console.log(' totalTickets '+totalTickets);
        setTotalTickets(  totalTickets +1 )
    }
    return (
        
            <div className="card mt-3">
                <div className="card-header">
                    {Title}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Director: {Director}</h5>
                    <p className="card-text">Genero: {Genre}</p>
                    <p className="card-text">Year: {Year}</p>
                    <p className="card-text">Total: </p>
                    <p className="card-text">
                        <button className="btn btn-primary" type="submit" onClick={ incrementarTickert } >Button</button>
                    </p>
                </div>
            </div>

        
    );
}

export default Movie;