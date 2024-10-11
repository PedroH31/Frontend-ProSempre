class AppHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header class="espacamento-header header">  
                <img class="logo" src="/img/logos/logo-site.png">
                <ul>
                    <li><a href="/" id="home">home</a><img src="/img/icones/nav-seletor.png"><img class="nav-ponto" src="/img/icones/ponto-nav.png"></li>
                    <li><a href="/paginas/videos/videos.html" id="videos">videos</a><img src="/img/icones/nav-seletor.png"><img class="nav-ponto" src="/img/icones/ponto-nav.png"></li>
                    <li><a href="/paginas/pais-e-profs/pais-e-profs.html" id="pais-e-profs">pais & profs</a><img src="/img/icones/nav-seletor.png"><img class="nav-ponto" src="/img/icones/ponto-nav.png"></li>
                    <li><a href="/paginas/forum/forum.html" id="forum">forum</a><img src="/img/icones/nav-seletor.png"><img class="nav-ponto" src="/img/icones/ponto-nav.png"></li>
                </ul>
            </header>
        `
    }
}

window.onload = function() {
    // Obtém o caminho atual da URL (sem o domínio)
    const currentPath = window.location.pathname;
  
    // Mapeia os IDs e caminhos correspondentes
    const navItems = {
      "/": "home",
      "/paginas/videos/videos.html": "videos",
      "/paginas/pais-e-profs/pais-e-profs.html": "pais-e-profs",
      "/paginas/forum/forum.html": "forum"
    };
  
    // Verifica se o caminho atual tem um item correspondente
    const activeItem = navItems[currentPath]
    
    if (activeItem) {
      // Exibe as imagens correspondentes ao item ativo
      const li = document.getElementById(activeItem).parentElement
      const images = li.getElementsByTagName('img')
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'inline'
      }
    }
  };

customElements.define("app-header", AppHeader)