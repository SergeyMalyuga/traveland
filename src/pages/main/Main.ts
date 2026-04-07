import type {DataHook} from "../../types/DataHook.type.ts";
import type {MainProps} from "../../models/MainProps.ts";
import type {Header} from "../../components/header/Header.ts";

export class Main {
    private container: HTMLElement;
    private header: Header;

    constructor(container: HTMLElement, props: MainProps) {
        this.container = container;
        this.header = props.header;
    }

    public render() {
        this.container.innerHTML = `
${this.header.render()}
<main role="main">
        <div data-hook="hero"></div>
</main>
        `;
    }

    private mount(element: HTMLElement, data: DataHook) {
        const container = this.container.querySelector<HTMLElement>(data);
        container?.appendChild(element);
    }
}