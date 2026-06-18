import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Converter from "../components/Converter";
import TrendingCoins from "../components/TrendingCoins";
import MarketStats from "../components/MarketStats";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Navbar />
      <Hero />
      <MarketStats />
      <Converter />
      <TrendingCoins />
      <Footer />
    </div>
  );
}

export default Home;