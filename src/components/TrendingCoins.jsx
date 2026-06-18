import { useEffect, useState } from "react";
import { getTrendingCoins } from "../services/cryptoApi";

function TrendingCoins() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data =
          await getTrendingCoins();

        setCoins(data.coins);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <section
      id="trending"
      className="trending"
    >
      <h2>🔥 Trending Coins</h2>

      <div className="coin-grid">
        {coins.map((coin) => (
          <div
            key={coin.item.id}
            className="coin-card"
          >
            <img
              src={coin.item.small}
              alt={coin.item.name}
            />

            <h3>
              {coin.item.name}
            </h3>

            <p>
              Rank #
              {coin.item.market_cap_rank}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingCoins;