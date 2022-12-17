import { GifItem } from '../../src/components/GifItem'
import { render, screen } from '@testing-library/react'

describe('Pruebas en <GifItem />', () => { 
    
    const title = 'Hi'
    const url = 'https://api.com/'

    test('debe hacer match con el snapshot', () => { 
    
        const { container } = render(<GifItem  title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar el url y el Alt indicado', () => { 
        render( <GifItem title={title} url={url} />)
        //screen.debug()
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
     })

     test('debe mostrar el titulo como un String', () => { 
        render( <GifItem title={title} url={url} />)

        expect( screen.getByText(title)).toBeTruthy()
      })
 })