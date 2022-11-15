// console.log(document.getElementsByTagName('h2'))
// var htag =  document.getElementsByTagName('h2')
// htag[0].style.color = "red"

// var divm = document.getElementById('main')
// console.log(divm)

// var pelement = document.getElementsByClassName('para')
// console.log(pelement)

// var helem = document.querySelector('h2')
// console.log(helem)

// var divm = document.querySelector('#main')
// console.log(divm)

// var par = document.querySelector('.para')
// var pars = document.querySelectorAll('.para')
// console.log(par)
// console.log(pars)


// var divm = document.querySelector('#main')
// console.log(divm.innerHTML)
// console.log(divm.innerText)


// var divm = document.querySelector('#main')

// var btn = document.createElement('button')
// btn.innerText = 'Ajouter'
// divm.appendChild(btn)

// var par = document.querySelectorAll('.para')
// divm.insertBefore(btn,par[1].previousElementSibling)
// divm.insertBefore(btn,par[0])

// console.log(par.parentElement)
// console.log(par.nextElementSibling)
// console.log(par.previousElementSibling)
// divm.remove()

// var hsana = document.querySelector('#testColor')
// hsana.setAttribute('class','yassine')

function Yassine(){
    alert('Yassine is beautiful')
}


// var btnPlus = document.querySelector('.plus')
// btnPlus.addEventListener('click',function(){
//     btnPlus.previousElementSibling.innerText++
// })

// var btnMoins = document.querySelector('.moins')
// btnMoins.addEventListener('click',function(){
//     if(btnMoins.nextElementSibling.innerText>0){
//         btnMoins.nextElementSibling.innerText--
//     }   
// })

var btnsPlus = document.querySelectorAll('.plus')
// console.log(btnsPlus)

for(let i = 0;i<btnsPlus.length;i++){
    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].previousElementSibling.innerText++
    })
}

var btnsMoins = document.querySelectorAll('.moins')


for(let i = 0; i<btnsMoins.length;i++){
    btnsMoins[i].addEventListener('click',function(){
        if(btnsMoins[i].nextElementSibling.innerText>0){
            btnsMoins[i].nextElementSibling.innerText--
        }
    })
}
