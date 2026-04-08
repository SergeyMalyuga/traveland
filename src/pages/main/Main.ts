import type {DataHook} from "../../types/DataHook.type.ts";
import type {MainProps} from "../../models/MainProps.ts";
import type {Header} from "../../components/header/Header.ts";
import type {Hero} from "../../components/hero/Hero.ts";
import {Hooks} from "../../constants/consts.ts";

export class Main {
    private container: HTMLElement;
    private header: Header;
    private hero: Hero;

    constructor(container: HTMLElement, props: MainProps) {
        this.container = container;
        this.header = props.header;
        this.hero = props.hero;
    }

    public render() {
        this.container.innerHTML = `
${this.header.render()}
<main role="main">
        <div data-hook="hero"></div>
</main>
        `;
        this.mount(this.hero.render(), Hooks.HERO)
    }

    private mount(element: HTMLElement, data: DataHook) {
        const container = this.container.querySelector<HTMLElement>(data);
        container?.appendChild(element);
    }
}