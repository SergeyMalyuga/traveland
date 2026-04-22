import type {Location} from "../../models/Location.ts";
import styles from "./LocationCard.module.scss";

export class LocationCard {
    private readonly location: Location;

    constructor(location: Location) {
        this.location = location;
    }

    public render() {
        const {image, title, description} = this.location;
        const {url, height, width, alt} = image;
        const article = document.createElement("article");
        article.className = styles.card;
        article.innerHTML = `
<a class="${styles.link} link-hover" href="#">
        <img class="${styles.image}" src="${url}" width="${width}" height="${height}" alt="${alt}"/>
       <div class="${styles.wrapper}">
       <h2 class="${styles.title}">${title}</h2>
        <p class="${styles.text}">${description}</p> 
</div>
</a>
`;
        return article;
    }
}
