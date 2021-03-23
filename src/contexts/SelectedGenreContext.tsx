import {createContext, ReactNode, useState} from 'react'


interface SelectedGenreContextData {
    selectedGenreId:number;
    changeGenre : (id:number) => void; 
}

interface selectedGenreProviderProps {
    children: ReactNode;
}

export const SelectedGenreContext = createContext({} as SelectedGenreContextData)

export function SelectedGenreProvider({ children }: selectedGenreProviderProps) {
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    function changeGenre(id:number) {
        setSelectedGenreId(id)
    }

    return (
        <SelectedGenreContext.Provider
        value={{
                selectedGenreId,
                changeGenre
        }}
        >

            {children}
        </SelectedGenreContext.Provider>
    )
}