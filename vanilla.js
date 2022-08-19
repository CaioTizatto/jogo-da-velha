var topStart  = document.getElementsByTagName('td')[0] 
var topCenter = document.getElementsByTagName('td')[1]
var topEnd = document.getElementsByTagName('td')[2]
var centerStart = document.getElementsByTagName('td')[3]
var centerCenter = document.getElementsByTagName('td')[4]
var centerEnd = document.getElementsByTagName('td')[5]
var bottomStart = document.getElementsByTagName('td')[6]
var bottomCenter = document.getElementsByTagName('td')[7]
var bottomEnd = document.getElementsByTagName('td')[8]

var array = []
var tableData = 

topStart.addEventListener('click', DeclarartopStart)
topCenter.addEventListener('click', DeclarartopCenter)
topEnd.addEventListener('click', DeclarartopEnd)
centerStart.addEventListener('click', DeclararcenterStart)
centerCenter.addEventListener('click', DeclararcenterCenter)
centerEnd.addEventListener('click', DeclararcenterEnd)
bottomStart.addEventListener('click', DeclararbottomStart)
bottomCenter.addEventListener('click', DeclararbottomCenter)
bottomEnd.addEventListener('click', DeclararbottomEnd)

function DeclarartopStart() {
     tableData = "topStart"
     topStart.removeEventListener('click', DeclarartopStart)
    marcarLetra()
}
function DeclarartopCenter() {
     tableData = "topCenter"
     topCenter.removeEventListener('click', DeclarartopCenter)
    marcarLetra()
}
function DeclarartopEnd() {
     tableData = "topEnd"
     topEnd.removeEventListener('click', DeclarartopEnd)
    marcarLetra()
}
function DeclararcenterStart() {
     tableData = "centerStart"
     centerStart.removeEventListener('click', DeclararcenterStart)
    marcarLetra()
}
function DeclararcenterCenter() {
     tableData = "centerCenter"
     centerCenter.removeEventListener('click', DeclararcenterCenter)
    marcarLetra()
}
function DeclararcenterEnd() {
     tableData = "centerEnd"
     centerEnd.removeEventListener('click', DeclararcenterEnd)
    marcarLetra()
}
function DeclararbottomStart() {
     tableData = "bottomStart"
     bottomStart.removeEventListener('click', DeclararbottomStart)
    marcarLetra()
}
function DeclararbottomCenter() {
     tableData = "bottomCenter"
     bottomCenter.removeEventListener('click', DeclararbottomCenter)
    marcarLetra()
}
function DeclararbottomEnd() {
     tableData = "bottomEnd"
     bottomEnd.removeEventListener('click', DeclararbottomEnd)
    marcarLetra()
}



function marcarLetra(){
    array.push("absolutamente qualquer coisa")
    if (array.length % 2 == 0)  {
         switch (tableData) {
            case 'topStart':
                topStart.innerHTML="x"                
                break;
            case 'topCenter':
                topCenter.innerHTML="x"
                break;
            case 'topEnd':
                topEnd.innerHTML="x"
                break
            case 'centerStart':
                centerStart.innerHTML="x"
                break;
            case 'centerCenter':
                centerCenter.innerHTML="x"
                break;
            case 'centerEnd':
                centerEnd.innerHTML="x"
                break;
            case 'bottomStart':
                bottomStart.innerHTML="x"
                break;
            case 'bottomCenter':
                bottomCenter.innerHTML="x"
                break
            case 'bottomEnd':
                bottomEnd.innerHTML="x"
                break
         }
        
    } else  {
        switch (tableData) {
            case 'topStart':
                topStart.innerHTML="o"                
                break;
            case 'topCenter':
                topCenter.innerHTML="o"
                break;
            case 'topEnd':
                topEnd.innerHTML="o"
                break
            case 'centerStart':
                centerStart.innerHTML="o"
                break;
            case 'centerCenter':
                centerCenter.innerHTML="o"
                break;
            case 'centerEnd':
                centerEnd.innerHTML="o"
                break;
            case 'bottomStart':
                bottomStart.innerHTML="o"
                break;
            case 'bottomCenter':
                bottomCenter.innerHTML="o"
                break
            case 'bottomEnd':
                bottomEnd.innerHTML="o"
                break
        
    }
 }
 CheckGameOver()
}

function CheckGameOver() {
if ( topStart.innerHTML == centerStart.innerHTML && centerStart.innerHTML == bottomStart.innerHTML && centerStart.innerHTML !=0 || topStart.innerHTML == topCenter.innerHTML && topCenter.innerHTML == topEnd.innerHTML && topStart.innerText != 0 || centerStart.innerHTML == centerCenter.innerHTML && centerCenter.innerHTML == centerEnd.innerHTML && centerEnd.innerHTML != 0 ||  bottomStart.innerHTML == bottomCenter.innerHTML && bottomCenter.innerHTML ==  bottomEnd.innerHTML && bottomEnd.innerHTML != 0 || topCenter.innerHTML == centerCenter.innerHTML && centerCenter.innerHTML == bottomCenter.innerHTML && bottomCenter.innerHTML !=0 || topEnd.innerHTML == centerEnd.innerHTML && centerEnd.innerHTML == bottomEnd.innerHTML && bottomEnd.innerHTML != 0 || topStart.innerHTML == centerCenter.innerHTML && centerCenter.innerHTML == bottomEnd.innerHTML && bottomEnd.innerHTML != 0 || topEnd.innerHTML == centerCenter.innerHTML && centerCenter.innerHTML == bottomStart.innerHTML && bottomStart.innerHTML != 0) {
        var table = document.getElementsByTagName('table')[0]
        table.innerHTML="<h1>GAME OVER</h1>"
    }
    
} 