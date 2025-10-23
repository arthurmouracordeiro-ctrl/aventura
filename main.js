const avanca = document.querySelectorAll('.btn-proximo')
console.log(avanca)

avanca.forEach
button.addEventListener('click',function(){
 const atual = docuument.querySelector('.ativo')
 const proximoPasso = 'passo-' + this.getAttribute('data-proximo')
 
 atual.classList.remove('ativo')
