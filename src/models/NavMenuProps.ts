import type { BodyService } from "../services/BodyService.ts";

export interface NavMenuProps {
  toggleBtn: HTMLElement;
  openClass: string;
  btnCloseClass: string;
  bodyService: BodyService;
}
