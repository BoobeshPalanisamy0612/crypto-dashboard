import logo from "../src/assets/Crypto-Converter.png";

function Navbar() {
  return (
    <nav className="navbar">
      <h2> <img src="src/assets/Crypto-Converter.png" alt="Logo" />
  CryptoDash</h2>

      <ul>
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