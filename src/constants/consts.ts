import type {Location} from "../models/Location.ts";

export const Hooks = {
    HEADER: '[data-hook="header"]',
    HERO: '[data-hook="hero"]',
    POPULAR: '[data-hook="popular"]',
    OFFERS: '[data-hook="offers"]',
} as const;

export const LOCATIONS: Location[] = [
    {
        image: {
            url: '/images/raster/istanbul.jpg',
            width: 360,
            height: 331,
            alt: 'Istanbul, Turkey'
        },
        title: 'Istanbul, Turkey',
        description: 'Istanbul is a major city in Turkey that straddles Europe.'
    },
    {
        image: {
            url: '/images/raster/kuala.jpg',
            width: 360,
            height: 331,
            alt: 'Kuala Lumpur, malaysia'
        },
        title: 'Kuala Lumpur, malaysia',
        description: 'A 272-step long trek leads you to this century.'
    },
    {
        image: {
            url: '/images/raster/seoul.jpg',
            width: 360,
            height: 331,
            alt: 'Seoul, South Korea'
        },
        title: 'Seoul, South Korea',
        description: 'South Korea officially the Republic of Korea is a country in East Asia.'
    }
]