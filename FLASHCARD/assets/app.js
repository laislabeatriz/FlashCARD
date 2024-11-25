function criaCartao (categoria, pergunta, resposta) {
    console.log(categoria, pergunta, resposta)
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
}
let respostaEstaVisivel = false
function viraCartao(){
    respostaestaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
    cartao.addEventListener('click', viraCartao)
}
