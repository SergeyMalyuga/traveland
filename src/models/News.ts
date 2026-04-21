export interface News {
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  title: string;
  description: string;
  author: string;
}
