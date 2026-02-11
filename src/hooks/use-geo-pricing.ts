import { useState, useEffect } from "react";

type Region = "middle-east" | "gulf" | "north-america-europe" | "other";

interface GeoPricing {
  price: string;
  currency: string;
  region: Region;
  loading: boolean;
}

const GULF_COUNTRIES = ["AE", "SA", "QA", "KW", "BH", "OM"];
const MIDDLE_EAST_COUNTRIES = ["EG", "JO", "LB", "IQ", "SY", "PS", "YE", "LY", "TN", "DZ", "MA", "SD"];
const NA_EUROPE_COUNTRIES = [
  "US", "CA", "MX",
  "GB", "DE", "FR", "IT", "ES", "NL", "BE", "AT", "CH", "SE", "NO", "DK", "FI",
  "IE", "PT", "PL", "CZ", "RO", "HU", "GR", "BG", "HR", "SK", "SI", "LT", "LV", "EE",
  "LU", "MT", "CY", "IS",
];

function getRegion(countryCode: string): Region {
  if (GULF_COUNTRIES.includes(countryCode)) return "gulf";
  if (MIDDLE_EAST_COUNTRIES.includes(countryCode)) return "middle-east";
  if (NA_EUROPE_COUNTRIES.includes(countryCode)) return "north-america-europe";
  return "other";
}

function getPricing(region: Region): { price: string; currency: string } {
  switch (region) {
    case "middle-east":
      return { price: "9,500", currency: "LE" };
    case "gulf":
      return { price: "400", currency: "USD" };
    case "north-america-europe":
      return { price: "750", currency: "USD" };
    default:
      return { price: "750", currency: "USD" };
  }
}

export function useGeoPricing(): GeoPricing {
  const [data, setData] = useState<GeoPricing>({
    price: "750",
    currency: "USD",
    region: "other",
    loading: true,
  });

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((json) => {
        const region = getRegion(json.country_code || "");
        const pricing = getPricing(region);
        setData({ ...pricing, region, loading: false });
      })
      .catch(() => {
        setData((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  return data;
}
