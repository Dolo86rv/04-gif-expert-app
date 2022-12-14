import { useState } from 'react'
import { AddCategory, GifGrid} from './components'

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch'])
    
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return
        //setCategorias([...categorias,'Valorant'])  1. forma de agregar en una arreglo
        setCategories(cat => [newCategory, ...cat])
    }

    return (
        <>
            {/*Titulo*/}
            <h1>GiftExpertApp</h1>

            {/*Input*/}
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory={ value =>onAddCategory(value)}
            />
            
            {categories.map((category)=>(
                <GifGrid 
                    key={category} 
                    category={category} />
                ))
            }
            
        </>
    )
}