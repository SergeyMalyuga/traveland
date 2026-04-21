import type { Location } from "../models/Location.ts";
import type { Offer } from "../models/Offer.ts";
import type { News } from "../models/News.ts";

export const Hooks = {
  HEADER: '[data-hook="header"]',
  HERO: '[data-hook="hero"]',
  POPULAR: '[data-hook="popular"]',
  OFFERS: '[data-hook="offers"]',
  NEWS: '[data-hook="news"]',
} as const;

export const LOCATIONS: Location[] = [
  {
    image: {
      url: "/images/raster/istanbul.jpg",
      width: 360,
      height: 331,
      alt: "Istanbul, Turkey",
    },
    title: "Istanbul, Turkey",
    description: "Istanbul is a major city in Turkey that straddles Europe.",
  },
  {
    image: {
      url: "/images/raster/kuala.jpg",
      width: 360,
      height: 331,
      alt: "Kuala Lumpur, malaysia",
    },
    title: "Kuala Lumpur, malaysia",
    description: "A 272-step long trek leads you to this century.",
  },
  {
    image: {
      url: "/images/raster/seoul.jpg",
      width: 360,
      height: 331,
      alt: "Seoul, South Korea",
    },
    title: "Seoul, South Korea",
    description:
      "South Korea officially the Republic of Korea is a country in East Asia.",
  },
];

export const OFFERS: Offer[] = [
  {
    image: {
      url: "/images/raster/statue-of-liberty.jpg",
      width: 262,
      height: 173,
      alt: "Statue of Liberty",
    },
    title: "Statue of Liberty",
    country: "New York",
    rating: 4.8,
    days: 4,
    nights: 5,
    price: 450,
  },
  {
    image: {
      url: "/images/raster/great-wall .jpg",
      width: 262,
      height: 173,
      alt: "The Great Wall",
    },
    title: "The Great Wall",
    country: "China",
    rating: 4.9,
    days: 7,
    nights: 8,
    price: 850,
  },
  {
    image: {
      url: "/images/raster/dizin.jpg",
      width: 262,
      height: 173,
      alt: "Dizin",
    },
    title: "Dizin",
    country: "Iran",
    rating: 4.6,
    days: 5,
    nights: 6,
    price: 550,
  },
  {
    image: {
      url: "/images/raster/sajek-valley.jpg",
      width: 262,
      height: 173,
      alt: "Sajek Valley",
    },
    title: "Sajek Valley",
    country: "Bangladesh",
    rating: 4.7,
    days: 3,
    nights: 4,
    price: 400,
  },
  {
    image: {
      url: "/images/raster/osaka-сastle.jpg",
      width: 262,
      height: 173,
      alt: "Osaka Castle",
    },
    title: "Osaka Castle",
    country: "Japan",
    rating: 4.7,
    days: 4,
    nights: 5,
    price: 700,
  },
];

export const NEWS: News[] = [
  {
    image: {
      url: "/images/raster/hiroshima-japan.jpg",
      width: 263,
      height: 201,
      alt: "Hirosima Japan",
    },
    title: "The Hiroshima Peace!",
    description: "It was formally opened to the public in August that year.",
    author: "@shova_bd88",
  },
  {
    image: {
      url: "/images/raster/india-top-attractions-varanasi.jpg",
      width: 263,
      height: 201,
      alt: "India top attractions Varanasi",
    },
    title: "The faithful prayers!",
    description: "A major pilgrimage center for Hindus, the holy city.",
    author: "@adem/smith",
  },
  {
    image: {
      url: "/images/raster/naltar-lake-pakistan.jpg",
      width: 263,
      height: 201,
      alt: "Naltar lake Pakistan",
    },
    title: "Colourful waters!",
    description: "Forest-driven water and energy cycles are poorly.",
    author: "@jhon7leew",
  },
];
