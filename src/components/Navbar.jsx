import logo from "../assets/Crypto-Converter.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="brand">
          <img src={logo} alt="Logo" className="logo" />
          CryptoDash
        </h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#hero">Home</a>
        </li>

        <li>
          <a href="#converter">Converter</a>
        </li>

        <li>
          <a href="#trending">Trending</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;