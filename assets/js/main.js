

var arregloPokemon = [];

function Pokemon(nombre, color, nivelAtaque){//objeto de pokemon
  this.nombre = nombre;
  this.color = color;
  this.nivelAtaque = nivelAtaque;
  this.vida = 100;

  this.peleaPokemon = function(objetoDePokemon){
    objetoDePokemon.vida = objetoDePokemon.vida - this.nivelAtaque;
  }
};

function crearPokemon(){
  //agrega a arreglo un nuevo pokemon
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var nivelAtaquePokemon = document.getElementById("nivelAtaquePokemon");

  var pokemon = new Pokemon(
    nombrePokemon.value,
    colorPokemon.value,
    parseInt(nivelAtaquePokemon.value)
  )

  arregloPokemon.push(pokemon);
};

console.log()
