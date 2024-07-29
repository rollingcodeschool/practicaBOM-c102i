//BOM
// window.alert('mensaje de prueba')
function saludar(){
    document.write(`<p>Hola mundo 🌎</p>`)
}

let contador =1
function mensaje(){
    document.write(`<p>Desde setInterval</p>`)
    if(contador === 10){
        clearInterval(idInterval)
    }
    contador++;
}

//setTimeout
window.setTimeout(saludar,5000);

setTimeout(()=>{
    document.write(`<p>desde setTimeout 🕐</p>`)
},2000);

// setInterval
// window.setInterval(mensaje, 3000);

const idInterval = setInterval(mensaje, 3000);
console.log(idInterval)

// setTimeout(()=>{
//     clearInterval(idInterval)
// },7000)