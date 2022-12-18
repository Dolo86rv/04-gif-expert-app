import { render , screen} from "@testing-library/react"
import { GifExpertApp } from '../src/GifExpertApp'

describe('pruebas en el <GifExpertApp />', () => {
    
    const newCategory = 'Morty'
    const category = ['One Punch', 'Dragon', 'Morty']

    test('debe hacer match con el snapshot', () => { 

        const {container} = render(<GifExpertApp />)
        expect(container).toMatchSnapshot()
    })

    test('debe mostrare categoria existente', () => {
        
        render(<GifExpertApp />)
        expect(category).toContain(newCategory)
    })

    test('debe mostrar la nueva category', () => { 
        
        render(<GifExpertApp />)
        
    })
})