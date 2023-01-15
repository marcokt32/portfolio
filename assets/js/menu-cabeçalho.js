const menu = document.querySelector('[data-nav]')
const botao = document.querySelector('[data-botao]')

botao.addEventListener('click', () => {
    let menuOculto = menu.className === 'cabecalho__navegacao'
    if(menuOculto){
        menu.classList.toggle("cabecalho__navegacao__aberto")
    }else{
        menu.classList.toggle("cabecalho__navegacao")
    }
})