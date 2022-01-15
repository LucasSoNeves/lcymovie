import MovieScore from "Components/MovieScore/indes";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
    movie: Movie;
}

function MovieCard({ movie }: Props) {

    return (
        <div>
            <img className="lcymovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="lcymovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore count={movie.count} score={movie.score} />
                
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary lcymovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}
export default MovieCard;