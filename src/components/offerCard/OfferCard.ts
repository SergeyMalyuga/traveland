import styles from "./OfferCard.module.scss";
import type { Offer } from "../../models/Offer.ts";

export class OfferCard {
  private offer: Offer;

  constructor(offer: Offer) {
    this.offer = offer;
  }

  public render() {
    const { url, width, height, alt } = this.offer.image;
    return `
        <article class="${styles.card}">
        <a href="#" class="${styles.link} link-hover"><img class="${styles.image}" src="${url}" width="${width}" height="${height}" alt="${alt}" loading="lazy"/></a>
        <div class="${styles.wrapperInfo}">
          <h3 class="${styles.title}">${this.offer.title}</h3>
          <div class="${styles.wrapperCountry}">
            <span class="${styles.country}">${this.offer.country}</span>
            <span class="${styles.rating}">${this.offer.rating}</span>
          </div>
          <span>${this.offer.days} Days ${this.offer.nights} nights</span>
          <data value="${this.offer.price}"><span>$${this.offer.price}</span>/person</data>
</div>
</article>
        `;
  }
}
