let imgmenu = document.querySelector('.imgmenu')
let menu = document.querySelector('.menu')

function imgclick(){
    menu.style.display='block'
    menu.style.animation='animationabrir 1s'
    menu.style.left='0%'
}
function fecharmenuclick(){
    setTimeout(displaynone,1100)
    menu.style.animation='animationfechar 1s'
    menu.style.left='-70%'
    function displaynone(){
        menu.style.display='none'
    }
}