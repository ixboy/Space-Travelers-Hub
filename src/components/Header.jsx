import logo from '../img/planet.png';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
    <header className="d-flex justify-content-between container align-items-center my-2 border-bottom pb-2">
        <div className="d-flex gap-3">
            <img src={logo} alt="logo" width="50px" />
            <h1>Space Traveler's Hub</h1>
        </div>
        <nav className="d-flex gap-3">
            <Link to={"/"}>Rockets</Link>
            <Link to={"/missions"}>Missions</Link>
            <Link to={"/profile"}>My Profile</Link>
        </nav>
        <hr class="bg-danger border-2 border-top border-danger" />
    </header>
);

export default Header;