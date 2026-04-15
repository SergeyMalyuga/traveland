import type {Location} from "../../models/Location.ts";


export class LocationCard {
    private readonly location: Location;

    constructor(location: Location) {
        this.location = location;
    }

    public render() {
        const {image, title, description} = this.location;
        const {url, height, width, alt} = image;
        const article = document.createElement('article');
        article.innerHTML = `
        <img src="${url}" width="${width}" height="${height}" alt="${alt}"/>
        <h2>${title}</h2>
        <p>${description}</p>`
        return article;
    }
}