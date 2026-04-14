import styles from './Popular.module.scss';
import {LOCATIONS} from "../../constants/consts.ts";
import {LocationCard} from "../locationCard/locationCard.ts";

export class Popular {
    public render() {
        const section = document.createElement('section');
        section.className = styles.popular;
        section.innerHTML = `
<div class="container">
        <h2 class="section-title">Popular Location</h2>
        <p class="section-text">For every one of us, travel came first. We’ve spent years living as nomads, 
        pioneers, and voyagers— from island hopping in the</p>
        <ul class="${styles.list}"></ul>
</div>`;
        const cardsList = section.querySelector(`.${styles.list}`) as HTMLElement;
        for (let location of LOCATIONS) {
            const locationCard = new LocationCard(location);
            const item = document.createElement('li');
            item.appendChild(locationCard.render());
            cardsList.appendChild(item);
        }
        return section;
    }
}