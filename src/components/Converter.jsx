import { useState, useEffect } from "react";
import { getCoinPrice } from "../services/cryptoApi";

const coins = [
  "bitcoin",
  "ethereum",
  "solana",
  "dogecoin",
  "cardano",
];

function Converter() {
  const [coin, setCoin] = useState("bitcoin");
  const [currency, setCurrency] = useState("usd");
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        setLoading(true);

        const data = await getCoinPrice(
          coin,
          currency
        );

        setPrice(data[coin][currency]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
  }, [coin, currency]);

  const result = amount * price;

  return (
    <section
      id="converter"
      className="converter-card"
    >
      <h2>Crypto Converter</h2>

      <select
        value={coin}
        onChange={(e) =>
          setCoin(e.target.value)
        }
      >
        {coins.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item.toUpperCase()}
          </option>
        ))}
      </select>

      <select
        value={currency}
        onChange={(e) =>
          setCurrency(e.target.value)
        }
      >
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        <option value="eur">EUR</option>
      </select>

      <input
        type="number"
        value={amount}
        onChange={(e) =>
          setAmount(Number(e.target.value))
        }
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="result">
          {amount} {coin.toUpperCase()} =
          {" "}
          {result.toLocaleString()}
          {" "}
          {currency.toUpperCase()}
        </div>
      )}
    </section>
  );
}

export default Converter;