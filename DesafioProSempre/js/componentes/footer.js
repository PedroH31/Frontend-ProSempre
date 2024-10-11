class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="informacoes">
                    <div class="eject">
                            <div>
                                <img class="logo" src="/img/logos/logo-site.png">
                                <p>EJECT © Alguns Direitos Reservados</p>
                            </div>
                            <div>
                                <h2 class="footer-titulo">CONTATO</h2>
                                <div class="footer-dados">
                                    <div>
                                        <i>+55 21 99999-9999</i>
                                        <i>contato@sabidinhos.com</i>
                                    </div>
                                    <div>
                                        <i>Rua ali perto, 2000 - Candelária</i>
                                        <i>Rio Grande do Norte - RN</i>
                                        <div class="footer-icones">
                                            <a><img class="footer-icone" src="/img/logos/logo-insta.png"></a>
                                            <a><img class="footer-icone" src="/img/logos/logo-fb.png"></a>
                                            <a><img class="footer-icone" src="/img/logos/logo-yt.png"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div>
                        <h2 class="footer-titulo">INFORMAÇÕES</h2>
                        <div class="footer-dados">
                            <i>Exames Laboratoriais</i>
                            <i>Consultas Veterinarias</i>
                            <i>Plano PET de saúde</i>
                            <i>Quem somos?</i>
                        </div>
                    </div>

                </div>
            </footer>
        `
    }
}

customElements.define("app-footer", AppFooter)