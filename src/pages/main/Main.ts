import type {DataHook} from "../../types/DataHook.type.ts";
import type {MainProps} from "../../models/MainProps.ts";
import type {Header} from "../../components/header/Header.ts";
import type {Hero} from "../../components/hero/Hero.ts";
import {Hooks} from "../../constants/consts.ts";
import type {Popular} from "../../components/popular/Popular.ts";
import type {Offers} from "../../components/offers/Offers.ts";
import type {News} from "../../components/news/News.ts";
import type {Footer} from "../../components/footer/Footer.ts";

export class Main {
    private container: HTMLElement;
    private header: Header;
    private hero: Hero;
    private popular: Popular;
    private offers: Offers;
    private news: News;
    private footer: Footer;

    constructor(container: HTMLElement, props: MainProps) {
        this.container = container;
        this.header = props.header;
        this.hero = props.hero;
        this.popular = props.popular;
        this.offers = props.offers;
        this.news = props.news;
        this.footer = props.footer;
    }

    public render() {
        this.container.innerHTML = `
${this.header.render()}
<main role="main">
        <div data-hook="hero"></div>
        <div data-hook="popular"></div>
        <div data-hook="offers"></div>
        <div data-hook="news"></div>
</main>
${this.footer.render()}
        `;
        this.mount(this.hero.render(), Hooks.HERO);
        this.mount(this.popular.render(), Hooks.POPULAR);
        this.mount(this.offers.render(), Hooks.OFFERS);
        this.mount(this.news.render(), Hooks.NEWS);
    }

    private mount(element: HTMLElement, data: DataHook) {
        const container = this.container.querySelector<HTMLElement>(data);
        container?.appendChild(element);
    }
}