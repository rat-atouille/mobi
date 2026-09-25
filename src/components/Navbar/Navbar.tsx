import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar flex w-5/6 items-center justify-between rounded-full bg-gray-100 px-5 py-3 select-none">
      <Link to="/" className="nav-item text-sm f font-medium">
        Home
      </Link>

      <div className="nav-items flex items-center gap-4">
        <a href="#about" className="nav-item text-sm f font-medium">
          About
        </a>
        <Link
          to="/editor"
          className="inline-flex items-center justify-center rounded-full bg-black px-3 py-2 text-sm font-medium text-white"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
