<template>
    <h1 v-if="!pokemon">Loading ...</h1>
    <div v-else>
      <h1>Who is this pokemon?</h1>
      <PokemonPicture
        :pokemonId="pokemon.id"
        :showPokemon="showPokemon" 
      />

      <PokemonOption 
        :pokemons="pokemonArr"
        @selection = "checkAnswer"
      />

      <div v-if="showAnswer">
        <h2>{{message}}</h2>
        <button @click="newGame">
          New Game
        </button>
      </div>
    </div>
    
</template>

<script>

import PokemonOption from '@/components/PokemonOption.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions.js'

//console.log(getPokemonOptions())

export default {
  components: {PokemonOption, PokemonPicture},
  data(){
    return{
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray(){
      this.pokemonArr = await getPokemonOptions()
      //console.log(this.pokemonArr)
      const pokemonPosition = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[pokemonPosition]
    },
    checkAnswer(selectedId){
      this.showPokemon = true
      this.showAnswer = true

      if(selectedId === this.pokemon.id){
        this.message = `Correct!, ${this.pokemon.name}`
      }else {
        this.message = `Oops, it was, ${this.pokemon.name}`
      }

    },
    newGame(){
      //window.location.reload();
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted(){
    //mounted, one time method
    this.mixPokemonArray()
  }
}
</script>
