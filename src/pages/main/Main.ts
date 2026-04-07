import type {DataHook} from "../../types/DataHook.type.ts";

export class Main {
    private container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    public render() {
        this.container.innerHTML = `
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