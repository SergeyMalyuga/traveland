import type { Header } from "../components/header/Header.ts";
import type { Hero } from "../components/hero/Hero.ts";
import type { Popular } from "../components/popular/Popular.ts";
import type { Offers } from "../components/offers/Offers.ts";
import type { News } from "../components/news/News.ts";
import type { Footer } from "../components/footer/Footer.ts";

export interface MainProps {
  header: Header;
  hero: Hero;
  popular: Popular;
  offers: Offers;
  news: News;
  footer: Footer;
}
