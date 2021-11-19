import {shallowMount} from '@vue/test-utils'
import PokemonPicture from '../../../src/components/PokemonPicture'

describe('PokemonPicture Component', () => {
    
    test('should match snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId:1,
                showPokemon:false
            }
        })
        expect (wrapper.html()).toMatchSnapshot()
       
    })

    test('should show the hide picture', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId:100,
                showPokemon:false
            }
        })

        const [img1,img2] = wrapper.findAll('img')
        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)
        expect(img1.classes('hidden-pokemon')).toBeTruthy()
        //console.log(img1)
        expect(img1.attributes('src')).toBe( 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
    })

    test('should show the pokemon if  showPokemon:true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId:100,
                showPokemon:true
            }
        })

        const img = wrapper.find('img')
        expect(img.exists()).toBeTruthy()
        expect(img.classes('fade-in')).toBe(true)
       
    })
})