import { ReactComponent as Arrow } from 'assets/img/Arrow.svg';
import './styles.css';

function Pagination() {

    return (
        <div className="lcymovie-pagination-container">
    <div className="lcymovie-pagination-box">
        <button className="lcymovie-pagination-button" disabled={true} >
            <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="lcymovie-pagination-button" disabled={false} >
            <Arrow className="lcymovie-flip-horizontal" />
        </button>
    </div>
</div>
    );
}

export default Pagination;