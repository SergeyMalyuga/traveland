import type {Header} from "../components/header/Header.ts";
import type {Hero} from "../components/hero/Hero.ts";
import type {Popular} from "../components/popular/Popular.ts";

export interface MainProps {
    header: Header;
    hero: Hero;
    popular: Popular;
}