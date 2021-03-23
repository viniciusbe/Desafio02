import {createContext, ReactNode, useState} from 'react'


interface SelectedGenreContextData {
    selectedGenreId:number;
    changeGenre : (id:number) => void; 
}

interface selectedGenreProviderProps {
    children: ReactNode;
}

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

export const SelectedGenreContext = createContext({} as SelectedGenreContextData)

export function SelectedGenreProvider({ children }: selectedGenreProviderProps) {
    const [selectedGenreId, setSelectedGenreId] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState({} as GenreResponseProps);

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