import type {DataHook} from "../../types/DataHook.type.ts";
import type {MainProps} from "../../models/MainProps.ts";
import type {Header} from "../../components/header/Header.ts";
import type {Hero} from "../../components/hero/Hero.ts";
import {Hooks} from "../../constants/consts.ts";
import type {Popular} from "../../components/popular/Popular.ts";
import type {Offers} from "../../components/offers/Offers.ts";

export class Main {
    private container: HTMLElement;
    private header: Header;
    private hero: Hero;
    private popular: Popular;
    private offers: Offers;

    constructor(container: HTMLElement, props: MainProps) {
        this.container = container;
        this.header = props.header;
        this.hero = props.hero;
        this.popular = props.popular;
        this.offers = props.offers;
    }

    public render() {
        this.container.innerHTML = `
${this.header.render()}
<main role="main">
        <div data-hook="hero"></div>
        <div data-hook="popular"></div>
        <div data-hook="offers"></div>
</main>
        `;
        this.mount(this.hero.render(), Hooks.HERO);
        this.mount(this.popular.render(), Hooks.POPULAR);
        this.mount(this.offers.render(), Hooks.OFFERS);
    }

    private mount(element: HTMLElement, data: DataHook) {
        const container = this.container.querySelector<HTMLElement>(data);
        container?.appendChild(element);
    }
}