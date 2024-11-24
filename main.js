function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancelar(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}


const texts = [
    "DESENVOLVEDOR",
    "CODER",
    "JOGADOR"
]

let velo =100;
const elementoTexto = document.querySelector(".typewriter-text");

let textoIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textoIndex].length){
        elementoTexto.innerHTML += texts[textoIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, velo); 
    }
    else{
        setTimeout(apagarTexto, 1000)
    }
}

function apagarTexto(){
    if(elementoTexto.innerHTML.length > 0){
        elementoTexto.innerHTML = elementoTexto.innerHTML.slice(0,-1);
        setTimeout(apagarTexto, 50)
    }
    else{
        textoIndex = (textoIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter