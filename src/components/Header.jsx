import { useLocation, Link, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to check if the current route matches the route passed as an argument
  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        {/* Logo */}
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="Real Estate Logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")} // On click, navigate to the homepage
          />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-4">
            {/* Home Link */}
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/') ? 'text-black border-b-blue-500' : ''
              }`}
              onClick={() => navigate("/")} // On click, navigate to the homepage
            >
              <Link to="/">Home</Link>
            </li>

            {/* Offers Link */}
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/offers') ? 'text-black border-b-blue-500' : ''
              }`}
              onClick={() => navigate("/offers")} 
            >
              <Link to="/offers">Offers</Link>
            </li>

            {/* Sign In Link */}
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/sign-in') ? 'text-black border-b-blue-500' : ''
              }`}
              onClick={() => navigate("/sign-in")} 
            >
              <Link to="/sign-in">Sign In</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
