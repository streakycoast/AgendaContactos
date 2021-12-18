//pasando los valores de los inputs del form a constantes
const nombre= document.querySelector('#nombre').value;
const apellido= document.querySelector('#apellido').value;
const phone= document.querySelector('#phone').value;
const email= document.querySelector('#email').value;
const btnAdd=document.querySelector('#btn-add').value;
//definicion la constante de la base de datos (local storage)
const db= window.localStorage
//el modelado de los datos es un objeto "contacto"
let contacto ={
    id: Math.random(1,100), // tiene un id unico (generado con unos numeros random del 1 al 100)
    name: nombre, //asignamos los valores que le pasamos a las constantes
    apellido: apellido,
    phone: phone,
    email: email
}
//al dar clic en el boton "agregar contacto"
btnAdd.addEventListener('click',()=>{
    
    // creamos la funcion "guardar contacto" va a guardar en el local storage
    const guardarContacto =(db, contacto)=>{ // como argumentos le pasamos el db (local storage)
                 // y el objeto contacto que usaremos como modelo
                 //JSON STRINGIFY pasa el objeto a un string (que es lo que admite el local storage) 
        db.setItem(contacto.id,JSON.stringify(contacto)) //con set item agregamos un nuevo valor al local storage
        alert('Contacto guardado con exito!')
        window.location.href="/"
    }
    guardarContacto(db,contacto)
})

function llenarDivs(db,contacto){
    const encabezado =document.querySelector('.card-contact .card-tittle');

    const contenedorTelefono= document.querySelector('.card-contact .details .contenido-contacto #item1 .telefono ');
    contenedorTelefono.innerHTML="";

    const contenedorEmail= document.querySelector('.card-contact .details .contenido-contacto #item2 .email ');
    contenedorEmail.innerHTML="";

    let nombres=JSON.parse(db.getItem(contacto.nombre)) ;
    let telefonos = JSON.parse(db.getItem(contacto.phone));
    let emails=JSON.parse(db.getItem(contacto.email));

    for(nombre of nombres){
        const textoNombre = document.createElement('p');
        textoNombre.classList.add('contact');
        textoNombre.innerText=nombres;

    }
    for(telefono of telefonos){
        contenedorTelefono.innerHTMLtelefono=telefono;
    }
    for(email of emails){
        contenedorEmail.innerHTML=email;
    }
}

llenarDivs(db,contacto);

