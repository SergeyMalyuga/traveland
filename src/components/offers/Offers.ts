import { OFFERS } from "../../constants/consts.ts";
import { OfferCard } from "../offerCard/OfferCard.ts";
import styles from "./Offers.module.scss";

export class Offers {
  public render() {
    const section = document.createElement("section");
    section.setAttribute("id", "offers");
    section.className = styles.offers;
    section.innerHTML = `
        <div class="container">
        <h2 class="section-title">Special Offers</h2>
        <p class="section-text ${styles.text}">With the New Year comes a refreshing sense of wanderlust, 
        a longing in our souls to escape to warmer climates, </p>
<div class="swiper">
  <div class="swiper-wrapper"></div>
</div>
  <div class="${styles.swiperControls}">
  <div class="swiper-button-prev ${styles.buttonPrev}"></div>
    <div class="swiper-pagination ${styles.pagination}"></div>
  <div class="swiper-button-next ${styles.buttonNext}"></div>
</div>
</div>`;
    const swiperContainer = section.querySelector(
      ".swiper-wrapper",
    ) as HTMLElement;

    for (let offer of OFFERS) {
      const swiperSlide = document.createElement("div");
      const card = new OfferCard(offer);
      swiperSlide.className = "swiper-slide";
      swiperSlide.innerHTML = card.render();
      swiperContainer.appendChild(swiperSlide);
    }

    return section;
  }
}
