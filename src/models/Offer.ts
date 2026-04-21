export interface Offer {
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  title: string;
  country: string;
  rating: number;
  days: number;
  nights: number;
  price: number;
}
