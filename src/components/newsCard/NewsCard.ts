import type {News} from "../../models/News.ts";
import styles from "./NewsCard.module.scss";

export class NewsCard {
    private news: News;

    constructor(news: News) {
        this.news = news;
    }

    public render() {
        const article = document.createElement('article');
        article.className = styles.card;
        const {url, width, height, alt} = this.news.image;
        article.innerHTML = `
        <div class="${styles.wrapperImage}">
        <img src="${url}" width="${width}" height="${height}" alt="${alt}" loading="lazy"/>
</div>
<div>
<h3 class="${styles.title}">${this.news.title}</h3>
<p class="${styles.text}">${this.news.description}</p>
<span class="${styles.author}">${this.news.author}</span>
</div>
        `
        return article;
    }
}