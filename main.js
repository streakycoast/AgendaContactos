const botonAdd = document.getElementById('btn-add')

   



const guardarForm =(e)=>{
    e.preventDefault(); //evita que la pagina se refresque cuando das click
  
    var nombre=document.getElementById('nombre').value
    var apellido=document.getElementById('apellido').value
    var telefono=document.getElementById('phone').value
    var correo=document.getElementById('email').value

    const datosContacto={
        "nombre":nombre,
        "apellido":apellido,
        "telefono": telefono,
        "correo":correo
      }
   
    

    let idAleatorio= Math.random(); // genera un id unico
  
    let contactoString=localStorage.setItem(idAleatorio, JSON.stringify(datosContacto)); //agregar el objeto al localStorage

   let stringAJson = localStorage.getItem(idAleatorio); //obtener el elemento del localStorage
   
    let contactos= (idAleatorio, JSON.parse(stringAJson)); //convertir ese elemento a json
    
    //console.log(contactos)

    
      function mostrarDatos(){
          //console.log("mostrando datos" ,contactos)
          let tbody=document.getElementById('tbody');
          let td=document.getElementById('td')
          
          let contactoss=Object.keys(localStorage);
          //console.log(contactoss)
            let parentNode= document.getElementById('contenedorContactos'); 
          for (let contacto of contactoss) {
            let contact= JSON.parse(localStorage.getItem(contacto))
            
            //creando elementos HTML
            let divContacto=document.createElement('div')
            let nombreyApellidoContacto=document.createElement('h3')
            let telefonoContacto=document.createElement('p')
            let correoContacto=document.createElement('p')

            nombreyApellidoContacto.innerHTML=contact.nombre + " "+ contact.apellido
            telefonoContacto.innerHTML=contact.telefono
            correoContacto.innerHTML=contact.correo

            divContacto.appendChild(nombreyApellidoContacto)
            divContacto.appendChild(telefonoContacto)
            divContacto.appendChild(correoContacto)

            parentNode.appendChild(divContacto)

             
        }
      }

      
          mostrarDatos();
      

    


}




    
botonAdd.addEventListener('click', guardarForm)



