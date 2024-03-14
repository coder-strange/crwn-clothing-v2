import { createContext, useState } from 'react';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    categories: {}
});

export const CategoriesProvider = ({children}) => {
    const [ categories, setCategories ] = useState({});
    useEffect(() => {

        const getCategoryMap = async () => {
             getCategoriesAndDocuments().then(categoryMap => {
                setCategories(categoryMap)
            });
        }
        getCategoryMap()
    }, [])

    const value = { categories };


    return (
        <CategoriesContext.Provider value={ value }> 
            { children } 
        </CategoriesContext.Provider>
    )
}