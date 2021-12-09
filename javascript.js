const button = document.getElementById('btn')
const texto = document.getElementById('texto')
button.addEventListener('click', ()=>{
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
})
texto.addEventListener('click',()=>{
    texto.style="color:green;"
    texto.innerText="ahora soy color verde"
})

