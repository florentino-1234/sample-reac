import React from 'react';
import Movie from './Movie';
const ListOfCards = ({  listofMovies, setTotalTickets, totalTickets }) => {

   
    //validamos si la lista tienen elementos en su arrigo, si esta vacio no pintamos nada
    if (Object.keys(listofMovies).length === 0) return null;
    return (

        <div className="container">
            <div className="card-columns">
                {
                    listofMovies.map( (movie, index) => (

                        <Movie
                            key ={movie.id}
                            movie={movie}
                            setTotalTickets={setTotalTickets}
                            totalTickets = {totalTickets}
                             />
                    ))
                }
            </div>
        </div>
    );
}

export default ListOfCards;