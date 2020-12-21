const initialState = { favoritesFilm : []}
function toggleFavorite(state, action){
    let nextState
    switch (action.type){
        case 'TOGGLE_FAVORITE':
            const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id ===
                action.value.id)
                if(favoriteFilmIndex !== -1){
                    //le film est déja dans les favoris, on le supprime de la liste
                    nextState = {
                        ...state,
                        favoritesFilm : state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
                    }
                }else {
                    //le film n'est pas dans les films favoris, on l'ajoute à la liste
                    nextState = {
                        ...state,
                        favoritesFilm : [...state.favoritesFilm, action.value]
                    }
                }
                return nextState || state 
        default : 
        return state
    }
}

export default toggleFavorite