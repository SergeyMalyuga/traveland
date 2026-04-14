import type {NavMenuProps} from "../models/NavMenuProps.ts";

export class ToggleNavMenu {
    private element: HTMLElement;
    private isOpen: boolean = false;
    private readonly toggleBtn: HTMLElement;
    private readonly openClass: string;
    private readonly btnCloseClass: string;

    public constructor(element: HTMLElement, options: NavMenuProps) {
        this.element = element;
        this.toggleBtn = options.toggleBtn;
        this.openClass = options.openClass;
        this.btnCloseClass = options.btnCloseClass;
        this.init();
    }

    private init = () => {
        this.toggleBtn.addEventListener('click', this.toggle);
        window.addEventListener('keydown', this.onKeyDown);
    }

    private close() {
        this.element.classList.remove(this.openClass);
        this.toggleBtn.classList.remove(this.btnCloseClass);
    }

    private open() {
        this.element.classList.add(this.openClass);
        this.toggleBtn.classList.add(this.btnCloseClass);
    }

    private toggle = () => {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.open();
        } else {
            this.close();
        }
    }

    private onKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
            this.close();
            this.toggleBtn.focus();
        }
    }

    public destroy() {
        this.toggleBtn.removeEventListener('click', this.toggle);
        window.removeEventListener('keydown', this.onKeyDown);
    }
}