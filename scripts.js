
//Efeito de opacidade das sessions
const cartoes = document.querySelectorAll('.content-card')
const observador = new IntersectionObserver((entradas)=>{
    entradas.forEach(entrada =>{
        if (entrada.isIntersecting){
            entrada.target.classList.add('visivel')
        }
    })
})
cartoes.forEach(cartao=>{
    observador.observe(cartao)
})

//Efeito de digitação do letreiro do título
let titulo = document.getElementById('titulo')
let textoOriginal = titulo.textContent
titulo.textContent = ''
let contador = 0
function resetarTexto(){
    titulo.textContent =''
    contador = 0
    digitarTexto()
}
function digitarTexto(){
    if (contador < textoOriginal.length){
        titulo.textContent += textoOriginal.charAt(contador)
        contador++
        setTimeout(digitarTexto, 50)
    } else {
        setTimeout(resetarTexto, 3000)
    }
}
digitarTexto()