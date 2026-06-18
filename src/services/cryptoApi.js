const BASE_URL = "https://api.coingecko.com/api/v3";

export const getCoinPrice = async (coin, currency) => {
  const response = await fetch(
    `${BASE_URL}/simple/price?ids=${coin}&vs_currencies=${currency}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch price");
  }

  return response.json();
};

export const getTrendingCoins = async () => {
  const response = await fetch(
    `${BASE_URL}/search/trending`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending coins");
  }

  return response.json();
};

export const getMarketStats = async () => {
  const response = await fetch(
    `${BASE_URL}/global`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch market stats");
  }

  return response.json();
};