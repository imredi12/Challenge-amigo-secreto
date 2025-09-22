//Los valores se almacenan
let amigos = [];
let amigo = "";
let amigoSecreto = 0;

//FUNCIONES
function agregarAmigo(){
    //Obtención del valor de elemento
    amigo = document.getElementById('amigo').value;

    //Validando el dato ingresado
    if(!amigo){
        alert('Por favor, inserte un nombre.');
        console.log(amigo);
        return;
    }
    
    //Se ingresa al array el valor ingresado
    amigos.push(amigo);

    //Luego de ingresar, se limpia la casilla
    document.getElementById('amigo').value = "";

    //Se llama a la función
    agregarLista(amigos);
    console.log(amigos);
}
function agregarLista(valores){
    // Selecciona la lista <ul> y la borra por completamente
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < valores.length; i++) {
        // Se crea el <li>
        const nuevoElemento = document.createElement('li');

        // Se lo agrega al texto
        nuevoElemento.innerHTML = valores[i];

        // Se lo agrega a la lista de valores
        lista.appendChild(nuevoElemento); 
    }
}
function sortearAmigo(){
    if(amigos.length < 1){
        alert('Ingresa los amigos para hacer el sorteo!');
        return;
    }

    //Realizando el sorteo
    amigoSecreto = Math.floor(Math.random() * amigos.length)

    //El resultado es devuelto al usuario
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    const resultado = document.getElementById('resultado');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.innerHTML = `Tu amigo secreto es ${amigos[amigoSecreto]}`;
    resultado.appendChild(nuevoElemento); 
}
