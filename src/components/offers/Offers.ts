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
    <!-- Slides -->
    <div class="swiper-slide"><img src="/images/raster/statue-of-liberty.jpg"></div>
    <div class="swiper-slide"><img src="/images/raster/statue-of-liberty.jpg"></div>
    <div class="swiper-slide"><img src="/images/raster/statue-of-liberty.jpg"></div>
       <div class="swiper-slide"><img src="/images/raster/statue-of-liberty.jpg"></div>
    <div class="swiper-slide"><img src="/images/raster/statue-of-liberty.jpg"></div>
    <div class="swiper-slide"><img src="/images/raster/statue-of-liberty.jpg"></div>
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
        return section;
    }
}