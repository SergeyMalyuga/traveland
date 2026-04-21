import type { NavMenuProps } from "../models/NavMenuProps.ts";
import type { BodyService } from "../services/BodyService.ts";

export class ToggleNavMenu {
  private element: HTMLElement;
  private _isOpen: boolean = false;
  private readonly toggleBtn: HTMLElement;
  private readonly openClass: string;
  private readonly btnCloseClass: string;
  private readonly bodyService: BodyService;

  public constructor(element: HTMLElement, options: NavMenuProps) {
    this.element = element;
    this.toggleBtn = options.toggleBtn;
    this.openClass = options.openClass;
    this.btnCloseClass = options.btnCloseClass;
    this.bodyService = options.bodyService;
    this.init();
  }

  private init = () => {
    this.toggleBtn.addEventListener("click", this.toggle);
    window.addEventListener("keydown", this.onKeyDown);
  };

  private close() {
    this.element.classList.remove(this.openClass);
    this.toggleBtn.classList.remove(this.btnCloseClass);
    this.bodyService.setOverflow(false);
  }

  private open() {
    this.element.classList.add(this.openClass);
    this.toggleBtn.classList.add(this.btnCloseClass);
    this.bodyService.setOverflow(true);
  }

  private toggle = () => {
    this._isOpen = !this._isOpen;
    if (this._isOpen) {
      this.open();
    } else {
      this.close();
    }
  };

  private onKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
      this.close();
      this.toggleBtn.focus();
    }
  };

  public destroy() {
    this.toggleBtn.removeEventListener("click", this.toggle);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  public get isOpen() {
    return this._isOpen;
  }
}
