import MovieStars from "Components/MovieStars";
import './styles.css';

function MovieScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="lcymovie-score-container">
            <p className="lcymovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="lcymovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;