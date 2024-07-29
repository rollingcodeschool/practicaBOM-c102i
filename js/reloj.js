function obtenerFechaHora(){
    const fechaActual = new Date();
    console.log(fechaActual)
    console.log(fechaActual.getDate());
    console.log(fechaActual.getDay());
    console.log(fechaActual.getMonth());
    console.log(fechaActual.getFullYear());
    console.log(fechaActual.getHours());
    console.log(fechaActual.getMinutes());
    console.log(fechaActual.getSeconds());
    const diasSemana = ['Domingo','Lunes','Martes', 'Miercoles']
    console.log(diasSemana[fechaActual.getDay()])
    //obtener el h2 de la fecha
    const fecha = document.querySelector('#fecha')
    console.log(fecha)
    fecha.innerHTML = `${diasSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${fechaActual.getMonth() + 1} del ${fechaActual.getFullYear()}`
    //obtener el h2 de la hora
    const hora = document.querySelector('#hora');
    hora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()} `
}

setInterval(obtenerFechaHora, 1000);