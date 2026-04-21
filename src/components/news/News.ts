import styles from "./News.module.scss";
import { NEWS } from "../../constants/consts.ts";
import { NewsCard } from "../newsCard/NewsCard.ts";

export class News {
  public render(): HTMLElement {
    const section = document.createElement("section");
    section.setAttribute("id", "news");
    section.className = styles.news;
    section.innerHTML = `
        <div class="container">
        <h2 class="section-title">From Blog & News</h2>
        <p class="section-text ${styles.text}">Welcome to Community Conversations, a new interview series featuring 
        Intrepid travellers, creatives and activists in our community.</p>
        <div class="${styles.content}">
        <div>
        <div class="${styles.wrapperImage}">
        <img src="/images/raster/canada-ontario-niagara-falls.jpg" width="554" height="397" alt="Canada Ontario Niagara falls" loading="lazy"/>
</div>
<h3 class="${styles.title}">Banff National Park</h3>
<p class="section-text ${styles.textBlog}">Banff National Park lies in the heart of the majestic Rocky Mountains in the 
province of Alberta, and showcases some of Canada's most beautiful scenery. 
<span class="${styles.noWrap}">Turquoise-colored</span> lakes, snow-capped peaks, and glaciers are all easily accessible 
</p>
<span class="${styles.textAuthor}">@thomasalva_adison</span>
</div>
<ul class="${styles.listNews}"></ul>
</div>
</div>
        `;
    const listNews = section.querySelector(
      `.${styles.listNews}`,
    ) as HTMLElement;
    for (let news of NEWS) {
      const card = new NewsCard(news);
      listNews.appendChild(card.render());
    }
    return section;
  }
}
