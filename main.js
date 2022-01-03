let nombre= document.getElementById('nombre').value 
let apellido= document.getElementById('apellido').value 
let telefono= document.getElementById('phone').value 
let correo= document.getElementById('email').value 

const botonAdd = document.getElementById('btn-add')

botonAdd.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(nombre )
})

