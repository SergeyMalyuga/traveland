import styles from "./Hero.module.scss";

export class Hero {
  public render() {
    const section = document.createElement("section");
    section.innerHTML = `
        <section class="${styles.hero}">
        <div class="container">
        <h1 class="${styles.title}">Railtrips To Here, There And Everywhere!</h1>
        <p class="${styles.text}">We all wish to start our year the best way possible and also according to a common belief 
        if you have a great start to your.</p>
        <a class="${styles.link} btn-base" href="#">Explore more</a>
</div>
</section>`;
    return section;
  }
}
