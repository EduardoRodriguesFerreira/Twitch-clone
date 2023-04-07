function passar(){
    window.location.href="index2.html"
}
function voltar(){
    window.location.href="index.html"
}

var btnprime = document.querySelector('#btn-prime')

var prime = document.querySelector('#prime')

btnprime.addEventListener('click', function(){
    if(prime.style.visibility == 'visible'){
        prime.style.visibility = 'hidden'
    }
    else{
        prime.style.visibility = 'visible'
    }
})