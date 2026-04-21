import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export class OfferSwiper {
  private swiper!: Swiper;

  constructor() {
    this.init();
  }

  private init() {
    const swiper = document.querySelector(".swiper") as HTMLElement;
    if (swiper) {
      this.swiper = new Swiper(swiper, {
        modules: [Navigation, Pagination],
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 2,
        spaceBetween: 73,
        speed: 600,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          addIcons: false,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }

  public destroy() {
    this.swiper.destroy();
  }
}
