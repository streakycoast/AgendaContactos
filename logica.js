//pasando los valores de los inputs del form a constantes
const nombre= document.querySelector('#nombre')
const apellido= document.querySelector('#apellido')
const phone= document.querySelector('#phone')
const email= document.querySelector('#email')
const btnAdd=document.querySelector('#btn-add')
//obteniendo la card donde se mostraran los contactos
const cardContact = docuemnt.querySelector('.card-contact')
//definicion la constante de la base de datos (local storage)
const db= window.localStorage



btnAdd.onclick=()=>{
    let contacto ={
        id: Math.random(1,100),
        nombre: nombre.value,
        apellido: apellido.value,
        phone: phone.value,
        email: email.value
    }

    const guardarContacto =(db, contacto)=>{

        db.setItem(JSON.stringify())

    }

    guardarContacto(db,contacto)
}