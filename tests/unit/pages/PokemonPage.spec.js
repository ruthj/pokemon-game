import {shallowMount, mount} from '@vue/test-utils'
import PokemonPage from '../../../src/pages/PokemonPage'
import {pokemons} from '../mocks/pokemons.mock'

describe('PokemonPages Component', () => {
    
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('should match snapshot', () => {
        expect (wrapper.html()).toMatchSnapshot()
    })

    test('should call mixPokemon when mounted', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test('should match snapshot when loaded pokemos', () => {
        //mounts all the components const wrapper = mount(PokemonPage, {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
        
    })

    test('should show components PokemonPicture and PokemonOptions', () => {
       
        // const wrapper = mount(PokemonPage, {
        //     data() {
        //         return {
        //             pokemonArr: pokemons,
        //             pokemon: pokemons[0],
        //             showPokemon: false,
        //             showAnswer: false,
        //             message: ''
        //         }
        //     }
        // })
    

        // const pokemonPicture = wrapper.findComponent('PokemonPicture')
        // const pokemonOption = wrapper.findComponent('PokemonOption')

        // expect(pokemonOption).toBeTruthy()
        // expect(pokemonPicture).toBeTruthy()


        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const pokemonPicture = wrapper.find('pokemon-picture-stub')
        const pokemonOption = wrapper.find('pokemon-option-stub')

        expect(pokemonPicture.exists()).toBeTruthy()
        expect(pokemonOption.exists()).toBeTruthy()
        expect(pokemonPicture.attributes('pokemonid')).toBe('15')
        expect(pokemonOption.attributes('pokemons')).toBeTruthy()

        //expect(wrapper.find('pokemon-picture-stub').attributes('pokemonid')).toBe('15')
    })

    test('should test checkAnswer() ', async () => {
        
        const wrapper = shallowMount (PokemonPage, {
            data(){
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
              }
        })

        await wrapper.vm.checkAnswer(15)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Correct!, ${pokemons[0].name}`)

        await wrapper.vm.checkAnswer(107)
        expect(wrapper.vm.message).toBe(`Oops, it was, ${pokemons[0].name}`)
    })

})