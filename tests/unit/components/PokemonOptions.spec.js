import {shallowMount} from '@vue/test-utils'
import PokemonOption from '../../../src/components/PokemonOption'
import {pokemons} from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {

    let wrapper
    
    beforeEach(() => {
        wrapper = shallowMount(PokemonOption, {
            props: {
                pokemons
            }
        })
    })

    test('should match snapshot', () => {
        
        expect (wrapper.html()).toMatchSnapshot()
       
    })

    test('should show four options', () => {
        
        const attributeLi = wrapper.findAll('li')
        expect(attributeLi.length).toBe(4)
        expect(attributeLi[0].text()).toBe('pidgey')
        expect(attributeLi[1].text()).toBe('raticate')
        expect(attributeLi[2].text()).toBe('metapod')
        expect(attributeLi[3].text()).toBe('venusaur')

    })

    test('should $emit selection with paramameters', () => {
        const [li1,li2,li3,li4] = wrapper.findAll('li')
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')
        //console.log(wrapper.emitted('selection'))
        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([15])
        expect(wrapper.emitted('selection')[1]).toEqual([19])
        expect(wrapper.emitted('selection')[2]).toEqual([10])
        expect(wrapper.emitted('selection')[3]).toEqual([2])
    })
})