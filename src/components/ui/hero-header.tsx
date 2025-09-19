import { Link } from 'react-router-dom';
import Logo from './logo';

const HeroHeader = () => {
    return (
        <header>
            <nav className="fixed z-20 w-full px-6 sm:px-12 md:px-20 lg:px-40 xl:px-60 py-6">
                <div className="max-w-7xl">
                    <Link
                        to="/"
                        aria-label="home"
                        className="flex items-center">
                        <Logo />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default HeroHeader;
