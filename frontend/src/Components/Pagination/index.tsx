import { ReactComponent as Arrow } from 'assets/img/Arrow.svg';
import { MoviePage } from 'types/movie';
import './styles.css';

type Props = {
    page: MoviePage;
    onChange: Function;
}

function Pagination({ page, onChange }: Props) {

    return (
        <div className="lcymovie-pagination-container">
            <div className="lcymovie-pagination-box">
                <button className="lcymovie-pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)} >
                    <Arrow />
                </button>
                <p>{`${page.number} de ${page.totalPages}`}</p>
                <button className="lcymovie-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)} >
                    <Arrow className="lcymovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;
