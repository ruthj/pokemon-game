import pokemonApi from '../../../src/api/pokemonsApi'

describe('pokemonApi', () => {
    
    test('should be correct the baseURL(Axios)', () => {
        
        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')

    })

})