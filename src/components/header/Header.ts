import styles from './Header.module.scss'

export class Header {
    public render() {
        return `
        <header class="${styles.header}" role="banner">
        <div class="${styles.content} container">
                <a class="${styles.link} ${styles.linkLogo}" href="/">
        <img src="/images/vector/logo.svg" width="124" height="36" alt="Логотип компании"/>
</a>
<div class="${styles.wrapperHeader}">
<nav aria-label="Основная навигация">
<ul class="${styles.list}">
<li><a class="${styles.link}" href="#">Home</a></li>
<li><a class="${styles.link}" href="#">Location</a></li>
<li><a class="${styles.link}" href="#">Blog</a></li>
<li><a class="${styles.link}" href="#">About</a></li>
<li><a class="${styles.link}" href="#">Contact</a></li>
</ul>
</nav>
<a class="${styles.linkAction} btn-base">Booking now</a>
</div>
<button class="${styles.burger}" type="button">
<span class="${styles.line}"></span>
</button>
</div>
</header>`
    }
}