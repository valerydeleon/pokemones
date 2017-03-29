

var arregloPokemon = [];

function Pokemon(nombre, color, nivelAtaque){//objeto de pokemon
  this.nombrePokemon = nombre;
  this.colorPokemon = color;
  this.nivelAtaquePokemon = nivelAtaque;
  this.vida = 100;

  this.peleaPokemon = function(objetoDePokemon){
    objetoDePokemon.vida = objetoDePokemon.vida - this.nivelAtaque;
  }
};

function crearPokemon(){//agrega a arreglo un nuevo pokemon
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var nivelAtaquePokemon = document.getElementById("nivelAtaquePokemon");

  var pokemon = new Pokemon(//instancia de objeto
    nombrePokemon.value,
    colorPokemon.value,
    parseInt(nivelAtaquePokemon.value)
  )
  nombrePokemon.value = ""; //para que se limpie el input
  colorPokemon.value = "";
  nivelAtaquePokemon.value = "";

  arregloPokemon.push(pokemon);
  mostrarPokemonEnSelect()
};

var selector1, selector2, nuevoOption1, nuevoOption2;

function mostrarPokemonEnSelect(){
  selector1 = document.createElement("select");
  selector2 = document.createElement("select");

  var sectionPokemon1 = document.getElementById("sectionPokemon1");
  sectionPokemon1.innerHTML = "";
  var sectionPokemon2 = document.getElementById("sectionPokemon2");
  sectionPokemon2.innerHTML = "";

  arregloPokemon.forEach(function(pokemon){
    nuevoOption1 = document.createElement("option");
    nuevoOption2 = document.createElement("option");

    nuevoOption1.innerHTML = pokemon.nombrePokemon;
    selector1.appendChild(nuevoOption1);

    nuevoOption2.innerHTML = pokemon.nombrePokemon;
    selector2.appendChild(nuevoOption2);
  })

  sectionPokemon1.appendChild(selector1);
  sectionPokemon2.appendChild(selector2);
}




function pelear(){
  var selector1Pelea = selector1.value;
  console.log(selector1Pelea)

}

//
// this.pelear = function(pokemonObjeto){
//   pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
// }
//
// this.beber = function(tipoAlcohol){
//   if(tipoAlcohol == "chelas"){
//     this.nivelDeAmistad += 80
//   }
//   else if (tipoAlcohol == "vodka") {
//     this.nivelDeAmistad += 10
//   }
// };
// }
