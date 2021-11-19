import getPokemonOptions, {getPokemons, getPokemonName} from '../../../src/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
    
    test('should return number array', () => {
        
       const pokemos = getPokemons()
        expect(pokemos.length).toBe(650)
        expect(pokemos[0]).toBe(1)
        expect(pokemos[555]).toBe(556)
    })

    test('should return an array with four elements', async() => {
        
        const pokemons = await getPokemonName([1,2,3,4])
        expect(pokemons).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ])
     })

     test('getPokemonOption should return mixed array', async() => {
        
        const pokemons = await getPokemonOptions()
        expect(pokemons.length).toBe(4)
        expect(pokemons).toStrictEqual([
            { 
                name: expect.any(String), 
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number)
            }
          ])
     })

})