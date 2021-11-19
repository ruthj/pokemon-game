import pokemonApi from '../api/pokemonsApi'

export const getPokemons = () => {
    //This function creates the array with 650 positions
    //And iterates the array with the map method
    //if pokemonArr is printed the array will have 650 undefined positions
    const pokemonArr = Array.from(Array(650))
    //console.log(pokemonArr)
    return pokemonArr.map(( _ , index) => index + 1 )
    
}

const getPokemonOptions = async() => {

    //this function will mix the array it will call the function getPokemons()
    //and it will add a random number
    //when mixedPokmon is printed 650 random numbers will be displayed in the array
    const mixedPokemons = getPokemons()
        .sort( () => Math.random() - 0.5)
    //console.log(mixedPokemons)
    const pokemons = await getPokemonName(mixedPokemons.splice(0,4))
    //console.table(pokemons)
    return pokemons
   
}


export const getPokemonName = async ([a,b,c,d] = []) => {
    //this function will recieve an array 
    //
    //const resp = await pokemonApi.get(`/7`)
    //console.log(resp.data.name, resp.data.id)
    //console.log(pokemons)

    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

    const [p1,p2,p3,p4] = await Promise.all(promiseArr)

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id},
    ]
}

export default getPokemonOptions