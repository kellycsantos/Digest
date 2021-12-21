let btnMenu = document.getElementsByTagName('button')[0].addEventListener('click',exibirMenu)
let menu = document.getElementsByClassName('menu')[0]

function exibirMenu(){

    if(menu.classList.contains('menu')){
        menu.classList.remove('menu')
        menu.classList.add('menu-aberto')
        
    }else{
        menu.classList.remove('menu-aberto')
        menu.classList.add('menu')
    }
}

let btnBusca = document.getElementsByClassName('icone')[0].addEventListener('click',exibirBusca)
let busca = document.getElementsByClassName('busca')[0]


function exibirBusca(){
       if(busca.classList.contains('busca')){
        busca.classList.remove('busca')
        busca.classList.add('busca-aberta')
        document.getElementsByClassName('icone')[0].setAttribute('src', "./icones/btn-fechar.png")
        
    }else{
        busca.classList.remove('busca-aberta')
        busca.classList.add('busca')
        document.getElementsByClassName('icone')[0].setAttribute('src', "./icones/pesquisa.png")
    }
}

let btnCurtida = document.getElementsByClassName('curtida')[0].addEventListener('click',curtir)
let btnLike =  document.getElementsByClassName('curtida')[0]
let likesNum =document.getElementsByClassName('numLike')[0]
let likesSoma = Number(document.getElementsByClassName('numLike')[0].textContent)



function curtir(){
    if(btnLike.classList.contains('curta')){
    btnLike.setAttribute('src',"./icones/coração ativo.png")
    btnLike.classList.add('curtiu')
    btnLike.classList.remove('curta')
    likesNum.innerText= likesSoma + 1
    
    }else{
    btnLike.setAttribute('src',"./icones/coração desativo.png")
    btnLike.classList.add('curta')
    btnLike.classList.remove('curtiu')
    likesNum.innerText= likesSoma + 0

    }
}

//Sessão C

let btnCurtida2 = document.getElementsByClassName('curtida')[1].addEventListener('click',curtir2)
let btnLike2 =  document.getElementsByClassName('curtida')[1]
let likesNum2 =document.getElementsByClassName('numLike')[1]
let likesSoma2 = Number(document.getElementsByClassName('numLike')[1].textContent)



function curtir2(){
    if(btnLike2.classList.contains('curta')){
    btnLike2.setAttribute('src',"./icones/coração ativo.png")
    btnLike2.classList.add('curtiu')
    btnLike2.classList.remove('curta')
    likesNum2.innerText= likesSoma2 + 1
    
    }else{
    btnLike2.setAttribute('src',"./icones/coração desativo.png")
    btnLike2.classList.add('curta')
    btnLike2.classList.remove('curtiu')
    likesNum2.innerText= likesSoma2 + 0

    }
}

//Sessão D

let btnCurtida3 = document.getElementsByClassName('curtida')[2].addEventListener('click',curtir3)
let btnLike3 =  document.getElementsByClassName('curtida')[2]
let likesNum3 =document.getElementsByClassName('numLike')[2]
let likesSoma3 = Number(document.getElementsByClassName('numLike')[2].textContent)



function curtir3(){
    if(btnLike3.classList.contains('curta')){
    btnLike3.setAttribute('src',"./icones/coração ativo.png")
    btnLike3.classList.add('curtiu')
    btnLike3.classList.remove('curta')
    likesNum3.innerText= likesSoma3 + 1
    }else{
    btnLike3.setAttribute('src',"./icones/coração desativo.png")
    btnLike3.classList.add('curta')
    btnLike3.classList.remove('curtiu')
    likesNum3.innerText= likesSoma3 + 0

    }
}4
//Sessão E

let btnCurtida4 = document.getElementsByClassName('curtida')[3].addEventListener('click',curtir4)
let btnLike4 =  document.getElementsByClassName('curtida')[3]
let likesNum4 =document.getElementsByClassName('numLike')[3]
let likesSoma4 = Number(document.getElementsByClassName('numLike')[3].textContent)



function curtir4(){
    if(btnLike4.classList.contains('curta')){
    btnLike4.setAttribute('src',"./icones/coração ativo.png")
    btnLike4.classList.add('curtiu')
    btnLike4.classList.remove('curta')
    likesNum4.innerText= likesSoma4 + 1
    }else{
    btnLike4.setAttribute('src',"./icones/coração desativo.png")
    btnLike4.classList.add('curta')
    btnLike4.classList.remove('curtiu')
    likesNum4.innerText= likesSoma4 + 0

    }
}

//Sessão G

let btnCurtida5 = document.getElementsByClassName('curtida')[4].addEventListener('click',curtir5)
let btnLike5 =  document.getElementsByClassName('curtida')[4]
let likesNum5 =document.getElementsByClassName('numLike')[4]
let likesSoma5 = Number(document.getElementsByClassName('numLike')[4].textContent)



function curtir5(){
    if(btnLike5.classList.contains('curta')){
    btnLike5.setAttribute('src',"./icones/coração ativo.png")
    btnLike5.classList.add('curtiu')
    btnLike5.classList.remove('curta')
    likesNum5.innerText= likesSoma5 + 1
    }else{
    btnLike5.setAttribute('src',"./icones/coração desativo.png")
    btnLike5.classList.add('curta')
    btnLike5.classList.remove('curtiu')
    likesNum5.innerText= likesSoma5 + 0

    }
}

//Sessão H

let btnCurtida6 = document.getElementsByClassName('curtida')[5].addEventListener('click',curtir6)
let btnLike6 =  document.getElementsByClassName('curtida')[5]
let likesNum6 =document.getElementsByClassName('numLike')[5]
let likesSoma6 = Number(document.getElementsByClassName('numLike')[5].textContent)



function curtir6(){
    if(btnLike6.classList.contains('curta')){
    btnLike6.setAttribute('src',"./icones/coração ativo.png")
    btnLike6.classList.add('curtiu')
    btnLike6.classList.remove('curta')
    likesNum6.innerText= likesSoma6 + 1
    }else{
    btnLike6.setAttribute('src',"./icones/coração desativo.png")
    btnLike6.classList.add('curta')
    btnLike6.classList.remove('curtiu')
    likesNum6.innerText= likesSoma6 + 0

    }
}


//Sessão H

let btnCurtida7 = document.getElementsByClassName('curtida')[6].addEventListener('click',curtir7)
let btnLike7 =  document.getElementsByClassName('curtida')[6]
let likesNum7 =document.getElementsByClassName('numLike')[6]
let likesSoma7 = Number(document.getElementsByClassName('numLike')[6].textContent)



function curtir7(){
    if(btnLike7.classList.contains('curta')){
    btnLike7.setAttribute('src',"./icones/coração ativo.png")
    btnLike7.classList.add('curtiu')
    btnLike7.classList.remove('curta')
    likesNum7.innerText= likesSoma7 + 1
    }else{
    btnLike7.setAttribute('src',"./icones/coração desativo.png")
    btnLike7.classList.add('curta')
    btnLike7.classList.remove('curtiu')
    likesNum7.innerText= likesSoma7 + 0

    }
}











