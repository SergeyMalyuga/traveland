import type {BodyService} from "./BodyService.ts";
import type {ToggleNavMenu} from "../modules/ToggleNavMenu.ts";

export class ScreenService {
    private bodyService: BodyService;
    private toggleNavMenu: ToggleNavMenu;
    private mediaQuery = window.matchMedia('(max-width: 890px)');
    private isTablet = this.mediaQuery.matches;

    constructor(bodyService: BodyService, toggleNavMenu: ToggleNavMenu) { //TODO создать type для параметров
        this.bodyService = bodyService;
        this.toggleNavMenu = toggleNavMenu;
        this.mediaQuery.addEventListener('change', this.mediaQueryHandler);
    }

    private mediaQueryHandler = (evt: MediaQueryListEvent) => {
        this.isTablet = evt.matches;
        if (!this.isTablet) {
            this.bodyService.setOverflow(false);
        } else if (this.toggleNavMenu.isOpen) {
            this.bodyService.setOverflow(true);
        }
    }

    public destroy() {
        this.mediaQuery.removeEventListener('change', this.mediaQueryHandler);
    }
}