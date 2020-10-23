import React from 'react';
import movies from "./movies";



function MovieList() {

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>

                    {movies.map((movie) => (
                        <tr key={movie}>
                            <td>{movie.id}</td>
                            <td>{movie.title}</td>
                            <td>{movie.description} </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}

export default MovieList;