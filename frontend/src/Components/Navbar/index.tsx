import { ReactComponent as GithubIcon } from 'assets/img/Github.svg';
import './style.css'

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="lcymovie-nav-content">
                    <h1>Lcymovie</h1>
                    <a href="https://github.com/LucasSoNeves">
                        <div>
                            <GithubIcon />
                            <p>/LucasSoNeves</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
