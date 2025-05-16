import { Movie } from "./Movie"

function Movies(props) {

    const {movies = []} = props;

    return <div className="movies">
        {
            movies.length ? (movies.map(movie => (
            <Movie
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
            type={movie.Type}
            />))) : (<h4>Not found</h4>)
        }
    </div>
}

export {Movies}