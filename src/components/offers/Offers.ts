import {OFFERS} from "../../constants/consts.ts";
import {OfferCard} from "../offer-card/OfferCard.ts";

export class Offers {
    public render() {
        const section = document.createElement('section');
        section.setAttribute('id', 'offers');
        section.innerHTML = `
        <div class="container">
        <h2 class="section-title">Special Offers</h2>
        <p class="section-text">With the New Year comes a refreshing sense of wanderlust, 
        a longing in our souls to escape to warmer climates, </p>
        <!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">

  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
</div>`
        const swiperContainer = section.querySelector('.swiper-wrapper') as HTMLElement;

        for (let offer of OFFERS) {
            const swiperSlide = document.createElement('div');
            const card = new OfferCard(offer);
            swiperSlide.className = 'swiper-slide';
            swiperSlide.innerHTML = card.render();
            swiperContainer.appendChild(swiperSlide);
        }

        return section;
    }
}