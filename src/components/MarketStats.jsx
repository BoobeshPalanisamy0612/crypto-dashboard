import { useEffect, useState } from "react";
import { getMarketStats } from "../services/cryptoApi";

function MarketStats() {
  const [stats, setStats] =
    useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data =
          await getMarketStats();

        setStats(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return <p>Loading stats...</p>;
  }

  return (
    <section className="stats">
      <div className="stat-card">
        <h3>Market Cap</h3>

        <p>
          $
          {Math.round(
            stats.total_market_cap.usd
          ).toLocaleString()}
        </p>
      </div>

      <div className="stat-card">
        <h3>24h Volume</h3>

        <p>
          $
          {Math.round(
            stats.total_volume.usd
          ).toLocaleString()}
        </p>
      </div>

      <div className="stat-card">
        <h3>BTC Dominance</h3>

        <p>
          {stats.market_cap_percentage.btc.toFixed(
            2
          )}
          %
        </p>
      </div>
    </section>
  );
}

export default MarketStats;