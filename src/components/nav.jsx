import { Link } from 'react-router-dom';
import "../styles/nav.css"
export default function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-values">
            <Link to="../pages/Open.jsx" className="nav-link">Home</Link>
            <Link to="../pages/Story.jsx" className="nav-link">Story</Link>
            <Link to="../pages/Letters.jsx" className="nav-link">Letters</Link>
            <Link to="../pages/Memory.jsx" className="nav-link">Memory</Link>
            <Link to="../pages/Play.jsx" className="nav-link">Play</Link>
            </div>
        </div>
    )
}