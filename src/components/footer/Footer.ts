import styles from "./Footer.module.scss";

export class Footer {
  public render() {
    return `
        <footer class="${styles.footer}">
        <div class="${styles.content} container">
                <div class="${styles.contacts}">
        <a href="/" class="${styles.linkLogo}">
        <img src="/images/vector/logo-dark.svg" width="124" height="36" alt="Логотип компании" loading="lazy"/>
</a>
<span class="${styles.label}">Contact us</span>
<a class="${styles.link} ${styles.linkEmail}" href="mailto:info@shovasatkhira88.com">@shovasatkhira88.com</a>
<ul class="${styles.listSocials}">
<li><a class="${styles.linkSocial}" href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/facebook.svg" width="20" height="20" alt="Facebook"/></a></li>
<li><a class="${styles.linkSocial}" href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/instagram.svg" width="20" height="20" alt="Instagram"/></a></li>
<li><a class="${styles.linkSocial}" href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/twitter.svg" width="20" height="20" alt="Twitter"/></a></li>
<li><a class="${styles.linkSocial}" href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/google.svg" width="20" height="20" alt="Google"/></a></li>
</ul>
</div>
<nav class="${styles.nav}">
<ul class="${styles.listNav}">
<li><a class="${styles.link} ${styles.linkNav}" href="#">Services</a></li>
<li><a class="${styles.link} ${styles.linkNav}" href="#">About</a></li>
<li><a class="${styles.link} ${styles.linkNav}" href="#">Our story</a></li>
<li><a class="${styles.link} ${styles.linkNav}" href="#">Benefits</a></li>
<li><a class="${styles.link} ${styles.linkNav}" href="#">Branding</a></li>
</ul>
<ul class="${styles.listNav}">
<li><a class="${styles.link} ${styles.linkNav}" href="#">Legal</a></li>
<li><a class="${styles.link} ${styles.linkNav}" href="#">Terms & Conditions</a></li>
<li><a class="${styles.link} ${styles.linkNav}" href="#">Privacy Policy</a></li>
<li><a class="${styles.link} ${styles.linkNav}" href="#">Terms of use</a></li>
</ul>
</nav>
<form>
<h2 class="${styles.title}">Subscribe now</h2>
<label for="email" class="visually-hidden">subscribe</label>
<div class="${styles.wrapperInput}">
<input class="${styles.inputEmail}" id="email" type="email" placeholder="Email"/>
<button class="btn-base ${styles.submit}" type="submit">Send</button>
</div>
</form>
</div>
</footer>
`;
  }
}
