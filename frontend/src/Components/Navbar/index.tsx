import { ReactComponent as GithubIcon } from 'assets/img/Github.svg';
import './style.css'

function Navbar() {

    return (
        <header>
    <nav className="container">
        <div className="lcymovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/LucasSoNeves" target="_blank" rel="noreferrer">
                <div className="lcymovie-contact-container">
                    <GithubIcon />
                    <p className="lcymovie-contact-link">/LucasSoNeves</p>
                </div>
            </a>
        </div>
    </nav>
</header>
    );
}

export default Navbar;
