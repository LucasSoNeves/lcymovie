import MovieStars from "Components/MovieStars";
import './styles.css';

type Props = {
    score: number;
    count: number
}

function MovieScore({ score, count } : Props) {

    return (
        <div className="lcymovie-score-container">
            <p className="lcymovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score} />
            <p className="lcymovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;