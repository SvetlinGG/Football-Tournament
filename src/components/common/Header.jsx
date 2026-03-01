
import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <header className="header">
            <div className="logo">Euro 2024 - Results and lineups</div>
            <nav>
                <NavLink to="/" end>
                Home / Matches
                </NavLink>
            </nav>
        </header>
    );
}